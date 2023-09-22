import mongoose, { mongo } from "mongoose";

const connectDb=()=>{
    mongoose.connect(process.env.DB_URI)
    .then((data)=>{console.log(`mongodb is connected with server ${data.connection.host}`)})
    .catch((err)=>{console.log(`db error ${err}`)})
}

export default connectDb