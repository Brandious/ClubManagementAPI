const env = process.env;

const config = {
    db: {
        host: env.DB_HOST || 'abul.db.elephantsql.com',
        port: env.DB_PORT || '5432',
        user: env.DB_USER || 'gptfycdw',
        password: env.DB_PASSWORD || 'rOkVgTddSNpBTg_UnhXhp1GDIP4BePv8',
        database: env.DB_NAME || 'gptfycdw',
    },
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        aquire: 30000,
        idle: 10000
    }
}

module.exports = config; 