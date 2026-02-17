import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import userRoute from './routes/user.route.js';
const app = express();
dotenv.config();
app.use(express.json())
const PORT = process.env.PORT||3001;
const URI=process.env.MONGODB_URI
try{
    await mongoose.connect(URI)
        console.log('connected to mongoDB')
    
}catch(err){
    console.log(err);
}
app.use('/user',userRoute);



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

