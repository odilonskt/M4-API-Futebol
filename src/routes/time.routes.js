import { Router } from "express";
import TimeController from "../controller/time.controller.js";

const timeRouter = Router()

timeRouter.get('/',(req,res)=> TimeController.getAllTime(req,res));

timeRouter.get('/:id', (req,res)=> TimeController.squardSelectTimeID(req,res));

timeRouter.get('/:id/jogadores',(req, res) => TimeController.getJogadoresDoTime(req, res))

timeRouter.get('/pais/:pais', (req, res) => TimeController.getPais(req, res));

export default  timeRouter;