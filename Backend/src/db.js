require('dotenv').config();
const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  dialectOptions: {
    ssl: {
      require: true, 
      rejectUnauthorized: false 
    }
  },
})

module.exports = db;

/*
database: sucursalud
username: 6kei1do38an5
host: oo3b43ycnhys.us-east-4.psdb.cloud
password: pscale_pw_9OBM5aqRRUbKsucrZ_hV-IZ2jdJJWK-PMsT6ckU8eYs

DATABASE_URL='mysql://6kei1do38an5:pscale_pw_9OBM5aqRRUbKsucrZ_hV-IZ2jdJJWK-PMsT6ckU8eYs@oo3b43ycnhys.us-east-4.psdb.cloud/sucursalud?ssl={"rejectUnauthorized":true}'


*/


/*
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
*/

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