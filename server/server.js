import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import route from './router/userRoute.js';
import cors from 'cors'; 

const app = express();
app.use(express.json());
app.use(cors()); 
dotenv.config(); 

const PORT = process.env.PORT || 5000; 
const MONGOURL = process.env.MONGO_URL || process.env.MONGODB_URI;

mongoose
    .connect(MONGOURL)
    .then(() => {
            console.log("База даних успішно підключена")
            app.listen(PORT, () => {
                        console.log(`Сервер запущено на порті: ${PORT} `)
            }); 
    })
    .catch((error) => console.log(error)); 

app.use("/api", route);