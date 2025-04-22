import { Router } from "express";
import TimeController from "../controller/time.controller.js";
import timeController from "../controller/time.controller.js";

const timeRouter = Router()


//*pegar todos os times 
timeRouter.get('/',(req,res)=> TimeController.getAllTime(req,res));

//*pegar time pelo id 
timeRouter.get('/:id', (req,res)=> TimeController.squardSelectTimeID(req,res));

//*pegar todos os jogadores que fazem parte do time 
timeRouter.get('/:id/jogadores',(req, res) => TimeController.getJogadoresDoTime(req, res))

//*pegar o pais e mostra todos os time que fazem parte da quele Estado 
timeRouter.get('/pais/:pais', (req, res) => TimeController.getPais(req, res));

//* pegar o maximo de gol do time que esta no banco de dados 
timeRouter.get('/cal/maximo', (req, res) => TimeController.getMaxByGol(req, res));

//*pegar o minimo de gol do time que esta no banco de dados 
timeRouter.get('/cal/minimo', (req, res) => TimeController.getMinByGol(req, res));

//*pegar os times que estão na media de gols no banco de dados
timeRouter.get('/cal/media',(req,res)=> TimeController.getMediaByGols(req, res));

export default  timeRouter;