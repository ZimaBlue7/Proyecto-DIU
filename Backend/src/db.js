const { Sequelize } = require("sequelize");

const db = new Sequelize({
    database: "surcusalud",
    username: "g6m15zsmcs0m",
    password: "pscale_pw_N7cWI7RJJWSAh9E2KaQBtVYIFsPmCV4uM8g3uRy6o50",
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
username: g6m15zsmcs0m
host: afinrqod14q8.us-east-2.psdb.cloud
password: pscale_pw_N7cWI7RJJWSAh9E2KaQBtVYIFsPmCV4uM8g3uRy6o50


*/