  const express = require("express");
  const { Op } = require("sequelize");
  const Article = require("../models/articleModel");

  const router = express.Router();

  router.get("/", async (req, res) => {
    try {
      console.log("Received Query Params:", req.query); // Debug log
      const { page = 1, limit = 10, author, sort, sortDirection } = req.query;
      const validSortFields = ["views", "shares"];
      const validSortDirections = ["asc", "desc"];
      const sortField = validSortFields.includes(sort) ? sort : "createdAt"; 
      const direction = validSortDirections.includes(sortDirection?.toLowerCase())
        ? sortDirection.toUpperCase()
        : "DESC"; 
      const order = [[sortField, direction]];

      console.log("Final Order Clause:", JSON.stringify(order)); 

      const where = author ? { author: { [Op.iLike]: `%${author}%` } } : {};

      const offset = (parseInt(page) - 1) * parseInt(limit);

      const { count, rows } = await Article.findAndCountAll({
        where,
        order,
        limit: parseInt(limit),
        offset: parseInt(offset),
      });

      res.json({
        success: true,
        source: "database",
        total: count,
        currentPage: parseInt(page),
        totalPages: Math.ceil(count / parseInt(limit)),
        hasNextPage: parseInt(page) * parseInt(limit) < count,
        data: rows,
      });
    } catch (error) {
      console.error("Error fetching articles:", error.message);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  });

  router.get("/highlights", async (req, res) => {
    try {
      const mostViewed = await Article.findOne({ order: [["views", "DESC"]] });
      const mostShared = await Article.findOne({ order: [["shares", "DESC"]] });

      res.json({
        success: true,
        mostViewed,
        mostShared,
      });
    } catch (error) {
      console.error("Error fetching highlights:", error.message);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  });

  router.post("/:id/summarize", async (req, res) => {
    try {
      const { id } = req.params;

      const article = await Article.findByPk(id);
      if (!article) {
        return res.status(404).json({ success: false, message: "Article not found" });
      }

      const mockSummary = `This is a mocked summary for the article titled "${article.title}" by ${article.author}.`;

      res.json({
        success: true,
        summary: mockSummary,
      });
    } catch (error) {
      console.error("Error generating summary:", error.message);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  });

  module.exports = router;