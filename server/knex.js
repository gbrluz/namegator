const knex = require('knex')({
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'admin',
      database: 'postgres',
    },
  });
  
 module.exports = {database:knex}
  
// knex.raw(`create table item (
//     id serial,
//     type text not null,
//     description text not null
//     );`).then(console.log).catch(console.log)
// knex("item").then(console.log)

// knex.select().table("item").then(console.log);

// knex.select('*').from('item')
