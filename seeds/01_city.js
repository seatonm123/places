
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE city; ALTER SEQUENCE city_id_seq restart with 11;')
    .then(function () {
      const cities = [{
        id: 1,
        name: 'London',
        country: 'United Kingdom',
        population: 8673713,
        latitude: 51.30,
        longitude: -0.7,
        year_founded: 43
      },{
        id: 2,
        name: 'Beijing',
        country: "People's Republic of China",
        population: 21700000,
        latitude: 39.55,
        longitude: 116.23,
        year_founded: -221
      },{
        id: 3,
        name: 'Tangier',
        country: 'Morocco',
        population: 947952,
        latitude: 35.46,
        longitude: -5.48,
        year_founded: -580
      },{
        id: 4,
        name: 'Mexico City',
        country: 'Mexico',
        population: 8918653,
        latitude: 1.26,
        longitude: -99.8,
        year_founded: 1521
      },{
        id: 5,
        name: 'Tokyo',
        country: 'Japan',
        population: 13617445,
        latitude: 35.41,
        longitude: 139.41,
        year_founded: 1457
      },{
        id: 6,
        name: 'Toronto',
        country: 'Canada',
        population: 2615060,
        latitude: 43.42,
        longitude: -79.24,
        year_founded: 1750
      },{
        id: 7,
        name: 'Barcelona',
        country: 'Spain',
        population: 1604555,
        latitude: 41.23,
        longitude: 2.11,
        year_founded: -5000
      },{
        id: 8,
        name: 'Osaka',
        country: 'Japan',
        population: 2668586,
        latitude: 34.41,
        longitude: 135.30,
        year_founded: -500
      },{
        id: 9,
        name: 'Vancouver',
        country: 'Canada',
        population: 603502,
        latitude: 49.15,
        longitude: -123.6,
        year_founded: 1886
      },{
        id: 10,
        name: 'Istanbul',
        country: 'Turkey',
        population: 14025646,
        latitude: 41.00,
        longitude: 28.57,
        year_founded: -660
      }];
      return knex('city').insert(cities);
    });
};
