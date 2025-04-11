import { jogadores } from '../database/db.js';

class JogadorController {
    
    getAllJogador(req,res){
       res.json(jogadores)
    }

    squardSelectJogadoresID(req,res){
        const {id} = req.params;
        const jogador = jogadores.find(jogador => jogador.id == id)
        if(!jogador){
            return res.status(404).json({message:"jogador não encontrador"})

        }
        return res.json(jogador)
     }

     getNacionalidade(req,res){
        const {nacionalidade} =req.params
        const jogadoresPorNacionalidade = jogadores.filter(jogador => jogador.nacionalidade.toLowerCase() === nacionalidade.toLowerCase());

        if (jogadoresPorNacionalidade.length === 0) {
            return res.status(404).json({ message: "Nenhum jogador encontrado com essa nacionalidade." });
        }

        return res.json(jogadoresPorNacionalidade)
     }
}

export default new JogadorController()