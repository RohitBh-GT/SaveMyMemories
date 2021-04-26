import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import postRoute from './routes/posts.js';

dotenv.config();
const app = express();

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use('/posts',postRoute);
app.get('/',(req,res)=>{
        res.send('Welcome to Our App. Here you can save your memories.' );
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL , { useNewUrlParser:true , useCreateIndex:true ,useUnifiedTopology:true })
        .then(app.listen(PORT,()=>{
             console.log(`Server started at port ${PORT}`)
        }))
        .catch((err)=>console.log(err.message));

mongoose.set('useFindAndModify',false);        