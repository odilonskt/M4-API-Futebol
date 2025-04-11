import { Router } from "express";
import JogadoresController from "../controller/jogardores.controller.js"; 

const jogadorRouter = Router();

// rota principal: GET /jogadores
jogadorRouter.get('/', (req, res) => JogadoresController.getAllJogador(req, res));

// rota extra (comentada)
// jogadorRouter.get('/jogador', (req, res) => {
//   res.status(200).json({ mensagem: 'jogadores em campo' });
// });

export default jogadorRouter;
