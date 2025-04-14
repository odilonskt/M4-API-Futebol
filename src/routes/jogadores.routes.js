import { Router } from "express";
import JogadoresController from "../controller/jogardores.controller.js"; 


const jogadorRouter = Router();

// rota principal: GET /jogadores
//*mostra todos os jogadores
jogadorRouter.get('/', (req, res) => JogadoresController.getAllJogador(req, res));

//*pegar o jogador em especifico pelo id 
jogadorRouter.get('/:id',(req,res)=> JogadoresController.squardSelectJogadoresID(req,res))


//*  pegar os jogadores pela sua nacionalidade 
jogadorRouter.get('/nacionalidade/:nacionalidade',(req,res)=> JogadoresController.getNacionalidade(req,res))

export default jogadorRouter;
