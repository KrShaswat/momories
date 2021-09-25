import express from 'express';
// import bodyParser from 'body-parser'; - DEPRECATED now in express
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// bodyparser is deprecated

app.use(express.json({limit: "30mb", extended}))
app.use(express.urlencoded({ limit: '30mb', extended: true}))
app.use(cors());

// use mongoDB atlas

