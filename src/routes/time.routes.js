import { Router } from "express";
import TimeController from "../controller/time.controller.js";


const timeRouter = Router()

timeRouter.get('/',(req,res)=> TimeController.getAllTime(req,res));


export default  timeRouter;