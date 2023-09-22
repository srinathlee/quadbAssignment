import app from './app.js'
import dotenv from  'dotenv'
import connectDb from './database/dbconnect.js'

// config 
dotenv.config({path:"./config/config.env"})
const PORT=process.env.PORT

connectDb()



app.listen(PORT,()=>{console.log(`app is running at port ${PORT}`)})