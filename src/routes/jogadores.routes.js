import { Router } from "express";
import JogadoresController from "../controller/jogardores.controller.js"; 


const jogadorRouter = Router();

// rota principal: GET /jogadores
jogadorRouter.get('/', (req, res) => JogadoresController.getAllJogador(req, res));

jogadorRouter.get('/:id',(req,res)=> JogadoresController.squardSelectJogadoresID(req,res))

jogadorRouter.get('/nacionalidade/:nacionalidade',(req,res)=> JogadoresController.getNacionalidade(req,res))

export default jogadorRouter;
