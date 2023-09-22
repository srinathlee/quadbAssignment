import  Express  from "express";
import * as controls from "../controllers/controller.js";
const router=Express.Router();

router.route('/store').get(controls.Storedata)
router.route('/getData').get(controls.GetData)


export default router