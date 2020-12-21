const { DataTypes } = require('sequelize');

const forecast = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
	fetch_date: {
    type: DataTypes.DATEONLY,
  },
  timestamp: {
    type: DataTypes.DATE,
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
  },
  lat: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  lon: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  location: {
    type: DataTypes.STRING,
  },
	model: {
    type: DataTypes.STRING,
  },
	'temp-surface': {
    field: 'temp_surface',
    type: DataTypes.FLOAT,
  },
  'temp-150h': {
    field: 'temp_150h',
    type: DataTypes.FLOAT,
  },
  'temp-200h': {
    field: 'temp_200h',
    type: DataTypes.FLOAT,
  },
  'temp-300h': {
    field: 'temp_300h',
    type: DataTypes.FLOAT,
  },
  'temp-400h': {
    field: 'temp_400h',
    type: DataTypes.FLOAT,
  },
  'temp-500h': {
    field: 'temp_500h',
    type: DataTypes.FLOAT,
  },
  'temp-600h': {
    field: 'temp_600h',
    type: DataTypes.FLOAT,
  },
  'temp-700h': {
    field: 'temp_700h',
    type: DataTypes.FLOAT,
  },
  'temp-800h': {
    field: 'temp_800h',
    type: DataTypes.FLOAT,
  },
  'temp-850h': {
    field: 'temp_850h',
    type: DataTypes.FLOAT,
  },
  'temp-900h': {
    field: 'temp_900h',
    type: DataTypes.FLOAT,
  },
  'temp-925h': {
    field: 'temp_925h',
    type: DataTypes.FLOAT,
  },
  'temp-950h': {
    field: 'temp_950h',
    type: DataTypes.FLOAT,
  },
  'temp-1000h': {
    field: 'temp_1000h',
    type: DataTypes.FLOAT,
  },
  'dewpoint-surface': {
    field: 'dewpoint_surface',
    type: DataTypes.FLOAT,
  },
  'dewpoint-150h': {
    field: 'dewpoint_150h',
    type: DataTypes.FLOAT,
  },
  'dewpoint-200h': {
    field: 'dewpoint_200h',
    type: DataTypes.FLOAT,
  },
  'dewpoint-300h': {
    field: 'dewpoint_300h',
    type: DataTypes.FLOAT,
  },
  'dewpoint-400h': {
    field: 'dewpoint_400h',
    type: DataTypes.FLOAT,
  },
  'dewpoint-500h': {
    field: 'dewpoint_500h',
    type: DataTypes.FLOAT,
  },
  'dewpoint-600h': {
    field: 'dewpoint_600h',
    type: DataTypes.FLOAT,
  },
  'dewpoint-700h': {
    field: 'dewpoint_700h',
    type: DataTypes.FLOAT,
  },
  'dewpoint-800h': {
    field: 'dewpoint_800h',
    type: DataTypes.FLOAT,
  },
  'dewpoint-850h': {
    field: 'dewpoint_850h',
    type: DataTypes.FLOAT,
  },
  'dewpoint-900h': {
    field: 'dewpoint_900h',
    type: DataTypes.FLOAT,
  },
  'dewpoint-925h': {
    field: 'dewpoint_925h',
    type: DataTypes.FLOAT,
  },
  'dewpoint-950h': {
    field: 'dewpoint_950h',
    type: DataTypes.FLOAT,
  },
  'dewpoint-1000h': {
    field: 'dewpoint_1000h',
    type: DataTypes.FLOAT,
  },
  'past3hprecip-surface': {
    field: 'past3hprecip_surface',
    type: DataTypes.FLOAT,
  },
  'past3hconvprecip-surface': {
    field: 'past3hconvprecip_surface',
    type: DataTypes.FLOAT,
  },
  'past3hsnowprecip-surface': {
    field: 'past3hsnowprecip_surface',
    type: DataTypes.FLOAT,
  },
  'wind_u-surface': {
    field: 'wind_u_surface',
    type: DataTypes.FLOAT,
  },
  'wind_u-150h': {
    field: 'wind_u_150h',
    type: DataTypes.FLOAT,
  },
  'wind_u-200h': {
    field: 'wind_u_200h',
    type: DataTypes.FLOAT,
  },
  'wind_u-300h': {
    field: 'wind_u_300h',
    type: DataTypes.FLOAT,
  },
  'wind_u-400h': {
    field: 'wind_u_400h',
    type: DataTypes.FLOAT,
  },
  'wind_u-500h': {
    field: 'wind_u_500h',
    type: DataTypes.FLOAT,
  },
  'wind_u-600h': {
    field: 'wind_u_600h',
    type: DataTypes.FLOAT,
  },
  'wind_u-700h': {
    field: 'wind_u_700h',
    type: DataTypes.FLOAT,
  },
  'wind_u-800h': {
    field: 'wind_u_800h',
    type: DataTypes.FLOAT,
  },
  'wind_u-850h': {
    field: 'wind_u_850h',
    type: DataTypes.FLOAT,
  },
  'wind_u-900h': {
    field: 'wind_u_900h',
    type: DataTypes.FLOAT,
  },
  'wind_u-925h': {
    field: 'wind_u_925h',
    type: DataTypes.FLOAT,
  },
  'wind_u-950h': {
    field: 'wind_u_950h',
    type: DataTypes.FLOAT,
  },
  'wind_u-1000h': {
    field: 'wind_u_1000h',
    type: DataTypes.FLOAT,
  },
  'wind_v-surface': {
    field: 'wind_v_surface',
    type: DataTypes.FLOAT,
  },
  'wind_v-150h': {
    field: 'wind_v_150h',
    type: DataTypes.FLOAT,
  },
  'wind_v-200h': {
    field: 'wind_v_200h',
    type: DataTypes.FLOAT,
  },
  'wind_v-300h': {
    field: 'wind_v_300h',
    type: DataTypes.FLOAT,
  },
  'wind_v-400h': {
    field: 'wind_v_400h',
    type: DataTypes.FLOAT,
  },
  'wind_v-500h': {
    field: 'wind_v_500h',
    type: DataTypes.FLOAT,
  },
  'wind_v-600h': {
    field: 'wind_v_600h',
    type: DataTypes.FLOAT,
  },
  'wind_v-700h': {
    field: 'wind_v_700h',
    type: DataTypes.FLOAT,
  },
  'wind_v-800h': {
    field: 'wind_v_800h',
    type: DataTypes.FLOAT,
  },
  'wind_v-850h': {
    field: 'wind_v_850h',
    type: DataTypes.FLOAT,
  },
  'wind_v-900h': {
    field: 'wind_v_900h',
    type: DataTypes.FLOAT,
  },
  'wind_v-925h': {
    field: 'wind_v_925h',
    type: DataTypes.FLOAT,
  },
  'wind_v-950h': {
    field: 'wind_v_950h',
    type: DataTypes.FLOAT,
  },
  'wind_v-1000h': {
    field: 'wind_v_1000h',
    type: DataTypes.FLOAT,
  },
  'gust-surface': {
    field: 'gust_surface',
    type: DataTypes.FLOAT,
  },
  'cape-surface': {
    field: 'cape_surface',
    type: DataTypes.FLOAT,
  },
  'ptype-surface': {
    field: 'ptype_surface',
    type: DataTypes.FLOAT,
  },
  'lclouds-surface': {
    field: 'lclouds_surface',
    type: DataTypes.FLOAT,
  },
  'mclouds-surface': {
    field: 'mclouds_surface',
    type: DataTypes.FLOAT,
  },
  'hclouds-surface': {
    field: 'hclouds_surface',
    type: DataTypes.FLOAT,
  },
  'rh-surface': {
    field: 'rh_surface',
    type: DataTypes.FLOAT,
  },
  'rh-150h': {
    field: 'rh_150h',
    type: DataTypes.FLOAT,
  },
  'rh-200h': {
    field: 'rh_200h',
    type: DataTypes.FLOAT,
  },
  'rh-300h': {
    field: 'rh_300h',
    type: DataTypes.FLOAT,
  },
  'rh-400h': {
    field: 'rh_400h',
    type: DataTypes.FLOAT,
  },
  'rh-500h': {
    field: 'rh_500h',
    type: DataTypes.FLOAT,
  },
  'rh-600h': {
    field: 'rh_600h',
    type: DataTypes.FLOAT,
  },
  'rh-700h': {
    field: 'rh_700h',
    type: DataTypes.FLOAT,
  },
  'rh-800h': {
    field: 'rh_800h',
    type: DataTypes.FLOAT,
  },
  'rh-850h': {
    field: 'rh_850h',
    type: DataTypes.FLOAT,
  },
  'rh-900h': {
    field: 'rh_900h',
    type: DataTypes.FLOAT,
  },
  'rh-925h': {
    field: 'rh_925h',
    type: DataTypes.FLOAT,
  },
  'rh-950h': {
    field: 'rh_950h',
    type: DataTypes.FLOAT,
  },
  'rh-1000h': {
    field: 'rh_1000h',
    type: DataTypes.FLOAT,
  },
  'gh-surface': {
    field: 'gh_surface',
    type: DataTypes.FLOAT,
  },
  'gh-150h': {
    field: 'gh_150h',
    type: DataTypes.FLOAT,
  },
  'gh-200h': {
    field: 'gh_200h',
    type: DataTypes.FLOAT,
  },
  'gh-300h': {
    field: 'gh_300h',
    type: DataTypes.FLOAT,
  },
  'gh-400h': {
    field: 'gh_400h',
    type: DataTypes.FLOAT,
  },
  'gh-500h': {
    field: 'gh_500h',
    type: DataTypes.FLOAT,
  },
  'gh-600h': {
    field: 'gh_600h',
    type: DataTypes.FLOAT,
  },
  'gh-700h': {
    field: 'gh_700h',
    type: DataTypes.FLOAT,
  },
  'gh-800h': {
    field: 'gh_800h',
    type: DataTypes.FLOAT,
  },
  'gh-850h': {
    field: 'gh_850h',
    type: DataTypes.FLOAT,
  },
  'gh-900h': {
    field: 'gh_900h',
    type: DataTypes.FLOAT,
  },
  'gh-925h': {
    field: 'gh_925h',
    type: DataTypes.FLOAT,
  },
  'gh-950h': {
    field: 'gh_950h',
    type: DataTypes.FLOAT,
  },
  'gh-1000h': {
    field: 'gh_1000h',
    type: DataTypes.FLOAT,
  },
  'pressure-surface': {
    field: 'pressure_surface',
    type: DataTypes.FLOAT,
  },
};

module.exports = forecast;