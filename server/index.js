import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app=express();

app.use(cors());
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
        res.status(500).json({ error: "Failed to fetch dogs" });
    }
});

app.post("/dogs", async (req, res) => {
    const { name, age, breed, gender, food, health, daily_routine } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO dogs (name, age, breed, gender, food, health, daily_routine) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [name, age, breed, gender, food, health, daily_routine]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to add dog" });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});