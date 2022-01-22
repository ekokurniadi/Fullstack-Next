var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.HOST,
        port: process.env.PORT,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
});

export default knex;