const { Sequelize } = require("sequelize");

const db = new Sequelize({
    database: "surcusalud",
    username: "7vumlb4zq3kq",
    password: "pscale_pw_AI1AA8xAsBF-31-jYyXFQjsbwMatb0Rubb1y4LuUzm4",
    host: "ituhfgduofgk.us-east-3.psdb.cloud",
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
username: 7vumlb4zq3kq
host: ituhfgduofgk.us-east-3.psdb.cloud
password: pscale_pw_AI1AA8xAsBF-31-jYyXFQjsbwMatb0Rubb1y4LuUzm4

DATABASE_URL='mysql://7vumlb4zq3kq:pscale_pw_AI1AA8xAsBF-31-jYyXFQjsbwMatb0Rubb1y4LuUzm4@ituhfgduofgk.us-east-3.psdb.cloud/surcusalud?ssl={"rejectUnauthorized":true}'


*/