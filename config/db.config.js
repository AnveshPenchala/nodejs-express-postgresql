module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "8187@Anv",
  DB: "test",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};