if ( process.env.NODE_ENV !== "production" )
{
    require('dotenv').config();
}
module.exports = 
{
    user:process.env.user,
    password:process.env.password,
    server:process.env.server,
    database:process.env.database,
    port:1433,
    synchronize:process.env.synchronize,
    trustServerCertificate:process.env.synchronize,
    Encrypt:process.env.synchronize,
    max:process.env.max,
    min:process.env.min,
    trustServerCertificate:process.env.trustServerCertificate,
    pool:{
        max: 10,
        min: 0,
        idleTimeoutMillis: 10000
    },
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }

}
