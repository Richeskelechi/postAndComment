import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import apiRouter from './routes/index.js';

const app = express();
dotenv.config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter)

const PORT = process.env.PORT || 3005;
mongoose.connect(process.env.mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database Connected'),
        app.listen(PORT, (() => {
            console.log(`http://localhost:${PORT}`);
        })))
    .catch(err => console.log("Database Not Connected"));
app.get('/', (req, res) => {
    console.log('hello');
    res.send('Welcome to server and hope you are good and ready');
})