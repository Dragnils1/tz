// var pg = require('pg');
// var conString = "postgres://postgres:Dragnil12@localhost:5432/postgres";

// var client = new pg.Client(conString);

// if (client.connect()) {
//     console.log('db connect');
// }
// module.exports =client

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'Dragnil12',
    host: 'localhost',
    port: '5432',
    database: 'postgres'
})

module.exports = pool