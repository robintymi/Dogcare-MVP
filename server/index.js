import express from "express";
import pool from "./db.js";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
});

app.get("/dogs", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM dogs");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
});

app.post("/dogs", async (req, res) => {
  const { name, age, breed, gender, food, health, dailyRoutine } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO dogs (name, age, breed, gender, food, health, daily_routine)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [name, Number(age), breed, gender, food, health, dailyRoutine]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("DB INSERT ERROR:", err); // <-- das zeigt dir ALLES im Terminal
    res.status(500).json({
      message: err.message,
      detail: err.detail,
      code: err.code,
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
