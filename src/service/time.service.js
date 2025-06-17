import  prisma  from "../util/prisma.client.js";

class TimeService{
  async getAllTime() {
        try {
            const times = await prisma.time.findMany();
            return times;
        } catch (error) {
            throw new Error(`Erro ao buscar os times: ${error.message}`);
        }
    }
async createTime(dados) {
    return await prisma.time.create({
        data: dados,
    });
}
    async squardSelectTimeID(req,res){
        const { id } = req.params;

        try{
            const time = await prisma.time.findUnique({
                where:{id:Number(id)},
            })
            if(!time){
                return res.status(404).json({message: 'Time não encontrado'})
            }

            return res.json(time);
        }catch(error){
            res.status(500).json({message: 'Erro ao buscar o time.'})
        }
    }

 async getJogadoresDoTime(req, res){
    const { id } = req.params;

    try{
        const time = await prisma.time.findUnique({
              where: { id: Number(id) },
            include: { jogadores: true },
        })

        if(!time){
            return res.status(404).json({ mensagem: "Time não encontrado."})
        }

        return res.json({time: time.nome,jogadores:time.jogadores});
    }catch(error){
        res.status(500).json({ message: 'Erro ao buscar os jogadores do time.' })
    }
 }
 async getPais(req, res) {
        const { pais } = req.params;

        try{
            const timesDoPais = await prisma.time.findMany({
                where: { pais: { equals: pais, mode: 'insensitive' } },
            });
            if (timesDoPais.length === 0){
                return res.status(404).json({ mensagem: "Nenhum time encontrado para o país especificado." });
            }
            return res.json(timesDoPais);
        }catch (error) {
            res.status(500).json({ message: 'Erro ao buscar os times pelo país.' });
        }
    }
    async getMaxByGol(req, res){
try{
    const maxGol = await prisma.time.aggregate({
          _max: {
                    gols: true,
                },
    });
    const timesComMaxGol = await prisma.time.findMany({
        where:{gols: maxGol._max.gols},
    });
    return res.json({maxGol:maxGol._max.gols,times: timesComMaxGol})
} catch (error) {
            res.status(500).json({ message: 'Erro ao calcular o máximo de gols.' });
    }
}
    async getMinByGol(req, res){
        try{
            const minGol = await prisma.time.aggregate({
                _min: {
                    gols: true,
                },
            });
            const timesComMinGol = await prisma.time.findMany({
                where: { gols: minGol._min.gols },
            });
               return res.json({ minGol: minGol._min.gols, times: timesComMinGol });
        }catch (error) {
            res.status(500).json({ message: 'Erro ao calcular o mínimo de gols.' });
        }
    }

    async getMediaByGols(req, res) {
        try {
            // Calcula a soma total de gols
            const totalGols = await prisma.time.aggregate({
                _sum: {
                    gols: true,
                },
            });

            // Conta o número total de times
            const count = await prisma.time.count();

            // Verifica se há times para evitar divisão por zero
            if (count === 0) {
                return res.status(404).json({ message: "Nenhum time encontrado para calcular a média de gols." });
            }

            // Calcula a média de gols
            const mediaGols = (totalGols._sum.gols / count).toFixed(0);
           
            // Retorna a média de gols
            return res.json({ mediaGols });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao calcular a média de gols.', error: error.message });
        }
    }
}

export default new TimeService();