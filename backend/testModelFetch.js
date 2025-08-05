require("dotenv").config(); // Load environment variables
const Article = require("./models/articleModel"); // Adjust the path based on your project structure
const sequelize = require("./config/db");

(async () => {
  try {
    await sequelize.authenticate();
    
    console.log("Database connected successfully!");

    const articles = await Article.findAll();
    console.log("Articles fetched from the database:");
    console.log(articles);
  } catch (error) {
    console.error("Error fetching articles:", error.message);
  } finally {

    await sequelize.close();
    console.log("Database connection closed.");
  }
})();