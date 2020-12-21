const _ = require('lodash');

const transformer = (data, keys) => {
  const units = _.get(data, 'units', {});
  const ts = _.get(data, 'ts', []);
  if (ts && ts.length > 0 && keys && keys.length > 0) {
    const dataByKeys = _.reduce(keys, (accu , value) => {
      const keyData = _.get(data, value);
       return keyData ? Object.assign({}, accu, { [value]: keyData }) : accu;
    }, {});
    const seriesData = _.map(ts, (t, idx) => {
      const dataFromKeys = _.mapValues(dataByKeys, (value) => {
        return value[idx];
      });
      return {
        timestamp: t,
        ...dataFromKeys,
      };
    });
    return seriesData;
  } else {
    return [];
  }
};

module.exports = transformer;