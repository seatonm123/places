
exports.up = function(knex, Promise) {
  return knex.schema.createTable('city', function(table){
    table.increments();
    table.text('name').notNull();
    table.text('country');
    table.integer('population');
    table.float('latitude');
    table.float('longitude');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('city');
};
