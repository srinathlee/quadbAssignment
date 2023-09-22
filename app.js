import  Express from "express";
import router from './routers/router.js'
import cors from "cors";

const app=Express()
app.use(Express.json())
app.use(cors())
app.use("/api",router)


export default app