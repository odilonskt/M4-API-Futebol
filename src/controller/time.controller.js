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

    getMaxByGol(req, res){
        const maxGol = Math.max(...times.map(time => time.gols));

        const timesComMaxGol = times.filter(time => time.gols === maxGol)

        return res.json({ maxGol, times: timesComMaxGol })
    }

    getMinByGol(req,res){
        const minGol = Math.min(...times.map(time => time.gols));

        const timesComMinGol = times.filter(time=> time.gols === minGol )

        return res.json({minGol,times:timesComMinGol})
    }

    getMediaByGols(req,res){
        const totalGols = times.reduce((soma,time)=> soma + time.gols, 0);

        const mediaGols = totalGols / times.length;

        // Filtra os times que possuem o número de gols igual à média
        const timesNaMedia = times.filter(time => time.gols === Math.round(mediaGols))

        return res.json({mediaGols,timesNaMedia});
    }
}


export default new TimeController()