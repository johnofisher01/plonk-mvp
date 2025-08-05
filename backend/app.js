// app.js
require("dotenv").config();
const express   = require("express");
const cors      = require("cors");
const { Op }    = require("sequelize");         
const sequelize = require("./config/db");
const Article   = require("./models/articleModel");

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",   
    credentials: true
  })
);
app.use(express.json());
app.use((req, _res, next) => {
  console.log(`[${req.method}] ${req.url}`, req.query, req.body);
  next();
});

/* ────────────────── routes ────────────────── */
app.get("/", (_req, res) => {
  res.send("Welcome to the Articles Dashboard API!");
});


app.get("/articles", async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      author,
      sort,
      sortDirection
    } = req.query;

    /* ---- ORDER clause -------------------------------------------------- */
    const validSortFields     = ["views", "shares"];
    const validSortDirections = ["asc", "desc"];

    const sortField = validSortFields.includes(sort) ? sort : "id";      // default id
    const direction =
      validSortDirections.includes((sortDirection || "").toLowerCase())
        ? sortDirection.toUpperCase()
        : "DESC";

    const order = [[sortField, direction]];

    const where = author
      ? { author: { [Op.iLike]: `%${author}%` } }
      : {};

    const offset = (Number(page) - 1) * Number(limit);

    const { count, rows } = await Article.findAndCountAll({
      where,
      order,
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
      source: "database",
      total: count,
      currentPage: Number(page),
      totalPages: Math.ceil(count / Number(limit)),
      hasNextPage: Number(page) * Number(limit) < count,
      data: rows
    });
  } catch (err) {
    console.error("Error fetching articles:", err.message);
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});


app.get("/articles/highlights", async (_req, res) => {
  try {
    const mostViewed = await Article.findOne({ order: [["views", "DESC"]] });
    const mostShared = await Article.findOne({ order: [["shares", "DESC"]] });

    res.json({ success: true, mostViewed, mostShared });
  } catch (err) {
    console.error("Error fetching highlights:", err.message);
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});


app.post("/articles/:id/summarize", async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) {
      return res
        .status(404)
        .json({ success: false, message: "Article not found" });
    }

    const summary = `This is a mocked summary for the article titled "${article.title}" by ${article.author}.`;
    res.json({ success: true, summary });
  } catch (err) {
    console.error("Error generating summary:", err.message);
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");
    await sequelize.sync({ alter: true });

    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("Unable to connect to the database:", err.message);
  }
})();
