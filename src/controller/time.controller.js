import { times, jogadores } from '../database/db.js';

class TimeController{
    getAllTime(req, res) {
        res.json(times);
      
    }

    squardSelectTimeID(req, res) {
        const { id } = req.params;

        const time = times.find(time => time.id == id);

        if (!time) {
            return res.status(404).json({ message: 'Time não encontrado' });
        }

        return res.json(time);
    }
     getJogadoresDoTime(req, res){
         const { id } = req.params
         const time = times.find(t => t.id == id);
        console.log(time)
         if(!time){
            return res.status(404).json({ mensagem: "Time não encontrado." });
         }

         const jogadoresDoTime = jogadores.filter(j => j.timeId == id)
         return res.json({time:time.nome, jogadores: jogadoresDoTime})
    }
    getPais(req, res) {
        const { pais } = req.params;
    
        // Busca o time pelo país
        const timesDoPais = times.filter(t => t.pais.toLowerCase() === pais.toLowerCase());
    
        // Verifica se encontrou times
        if (timesDoPais.length === 0) {
            return res.status(404).json({ mensagem: "Nenhum time encontrado para o país especificado." });
        }
    
        // Retorna os times encontrados
        return res.json(timesDoPais);
    }
}


export default new TimeController()