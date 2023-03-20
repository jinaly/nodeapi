module.exports = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3306,
        database: 'newone'
    }
});
