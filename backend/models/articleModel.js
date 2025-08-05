const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Article = sequelize.define("Article", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false, 
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  summary: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false, 
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  views: {
    type: DataTypes.INTEGER,
    allowNull: true, 
    defaultValue: 0, 
  },
  shares: {
    type: DataTypes.INTEGER,
    allowNull: true, 
    defaultValue: 0, 
  },
}, {
  tableName: "articles", 
  timestamps: false,    
});

module.exports = Article;