

import  prisma  from "../util/prisma.client.js";

class JogadorService{
 async getAllJogador(req, res) { // Renomeado para "getAllJogador"
        try {
            const jogadores = await prisma.jogador.findMany();
            res.json(jogadores);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar jogadores.", error: error.message });
        }
    } 

   async createJogador(dados) {
    return await prisma.jogador.create({
        data: dados,
    });
}

async squardSelectJogadoresID(req, res) { // Corrigido o nome do método
    const { id } = req.params;
    try {
        const jogador = await prisma.jogador.findUnique({
            where: { id: Number(id) },
        });
        if (!jogador) {
            return res.status(404).json({ message: "Jogador não encontrado." });
        }
        return res.json(jogador);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar jogador.", error: error.message });
    }
}


   async getNacionalidade(req,res){
    const {nacionalidade} = req.params;
    try{
        const jogadoresPorNacionalidade = await prisma.jogador.findMany({
             where: {
                    nacionalidade: {
                        equals: nacionalidade,
                        mode: 'insensitive'
                    } 
                }
        })
        if(jogadoresPorNacionalidade.length === 0 ){
            return res.status(404).json({message:
                "Nenhum jogador encontrado com essa nacionalidade."
            })}
            return res.json(jogadoresPorNacionalidade)
        }catch(error){
            res.status(500).json({message:"Erro ao busca jogadores por nacionalidade."})
        }
    }

}

export default new JogadorService();