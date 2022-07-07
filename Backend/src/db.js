const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "d62n48u667qme",
  username: "cuskjmhngaikkc",
  password: "7ab072f2f50f73e5d22d4b27c69a1a0e923f36e331232aec891157a8497b4bcc",
  host: "ec2-54-147-33-38.compute-1.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
})

module.exports = db;

/*

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


database: sucursalud
username: nm96kqoooavl
host: oo3b43ycnhys.us-east-4.psdb.cloud
password: pscale_pw_QiRqD4bnC--J1VzDPO_YmYASll3Vg60KnNy5EfIHBV8

DATABASE_URL='mysql://nm96kqoooavl:pscale_pw_QiRqD4bnC--J1VzDPO_YmYASll3Vg60KnNy5EfIHBV8@oo3b43ycnhys.us-east-4.psdb.cloud/sucursalud?ssl={"rejectUnauthorized":true}'


*/