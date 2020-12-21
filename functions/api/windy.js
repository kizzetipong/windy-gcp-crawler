const axios = require('axios');
const { WINDY_LEVELS_SUPPORT_PARAMETERS, WINDY_PARAMETERS } = require('./datadict');

const windy = async (lat = 49.809,
  lon = 16.787,
  model = 'gfs',
  parameters = ['temp', 'dewpoint', 'precip', 'convPrecip', 'snowPrecip', 'wind',
    'windGust', 'cape', 'ptype', 'lclouds', 'mclouds', 'hclouds', 'rh', 'gh', 'pressure'],
  levels = ['surface', '300h']) => {
  try {
    const res = await axios.post('https://api.windy.com/api/point-forecast/v2', {
      lat,
      lon,
      model,
      parameters,
      levels,
      key: '' //TODO: WINDY KEY HERE
    }, { headers: { 'content-type': 'application/json' }})
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

module.exports = windy;