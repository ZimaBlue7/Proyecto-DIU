const { Sequelize } = require("sequelize");

const db = new Sequelize({
    database: "surcusalud",
    username: "twb9r0loxnir",
    password: "pscale_pw_7DaR-0zkHi0XGcufItUHlct6DxVV4oVq40YtrF61QzM",
    host: "afinrqod14q8.us-east-2.psdb.cloud",
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },
})

module.exports = db;

/*

database: surcusalud
username: twb9r0loxnir
host: afinrqod14q8.us-east-2.psdb.cloud
password: pscale_pw_7DaR-0zkHi0XGcufItUHlct6DxVV4oVq40YtrF61QzM


*/