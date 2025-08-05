require("dotenv").config(); // Load environment variables
const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST, 
    port: process.env.DB_PORT || 5432, 
    dialect: "postgres", 
    logging: false, 
    dialectOptions: {
      ssl: {
        require: true, 
        rejectUnauthorized: false, 
      },
    },
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database was successful!");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  } finally {
    await sequelize.close();
    console.log("Database connection closed.");
  }
})();
