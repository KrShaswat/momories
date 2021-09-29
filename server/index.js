import express from 'express';
// import bodyParser from 'body-parser'; - DEPRECATED now in express
import mongoose from 'mongoose';
import cors from 'cors';

// set up routes
import postRoutes from './routes/posts.js';

const app = express();

// add prefix to routes
app.use('/posts', postRoutes);

// bodyparser is deprecated

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({ limit: '30mb', extended: true}))
app.use(cors());

// use mongoDB atlas

const CONNECTION_URL = ''
const PORT = process.env.PORT || 5000;

// connect to mongo atlas

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
