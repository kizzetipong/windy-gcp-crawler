const _ = require('lodash');
const windy = require('./api/windy');
const sequelize = require('./sequelize');
const { WINDY_LEVELS_SUPPORT_PARAMETERS, WINDY_PARAMETERS } = require('./api/datadict');
const transformer = require('./api/utils/transformer');

const API_LAT = 49.809;
const API_LON = 16.787;
const API_MODEL = 'gfs';
const API_PARAMETERS = ['temp', 'dewpoint', 'precip', 'convPrecip', 'snowPrecip', 'wind',
    'windGust', 'cape', 'ptype', 'lclouds', 'mclouds', 'hclouds', 'rh', 'gh', 'pressure'];
const API_LEVELS = ['surface', '300h'];

const params = [ API_LAT, API_LON, API_MODEL, API_PARAMETERS, API_LEVELS ];

const keysBuilder = (params, levels) => {
  return params.reduce((accu, current) => {
    let respKey = _.get(_.find(WINDY_PARAMETERS, { parameter: current }), 'respKey');
    if (!respKey) { // respKey is array
      return accu;
    } else {
      return respKey.reduce((keyAccu, keyCurrent) => {
        if (WINDY_LEVELS_SUPPORT_PARAMETERS.indexOf(current) > -1) {
          return [ ...keyAccu, ...levels.map((lv) => {
            return keyCurrent.replace('[level]', lv)
          })]
        } else {
          return [ ...keyAccu, keyCurrent];
        }
      }, [ ...accu ]);
    }
  }, []);
}

windy(...params).then((data) => {
  const keys = keysBuilder(API_PARAMETERS, API_LEVELS);
  const transformedData = transformer(data, keys);

  const bulkCreateItems = transformedData.map((item) => {
    return {
      fetch_date: sequelize.fn('NOW'),
      lat: API_LAT,
      lon: API_LON,
      location: 'MOCK_LOCATION',
      model: API_MODEL,
      ..._.omitBy(item, _.isNil),
    };
  });

  sequelize.models.forecast.bulkCreate(bulkCreateItems).then((result) => {
    console.log(`Add ${result.length} record(s)`);
    sequelize.close();
  }).catch((e) => {
    console.error(e);
  });
});

