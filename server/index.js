import express from 'express';
import pool from './db.js';

const app=express();

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

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});