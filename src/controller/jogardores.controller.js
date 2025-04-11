import { jogadores } from '../database/db.js';


class JogadorController {
    getAllJogador(req,res){
       res.send(jogadores)
    }
}


export default new JogadorController()