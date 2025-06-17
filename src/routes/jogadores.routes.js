import { Router } from "express";
import JogadorService from "../service/jogador.service.js";

const jogadorRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Jogadores
 *   description: Operações relacionadas a jogadores de futebol
 */

/**
 * @swagger
 * /jogadores:
 *   get:
 *     summary: Retorna todos os jogadores
 *     tags: [Jogadores]
 *     responses:
 *       200:
 *         description: Lista de todos os jogadores cadastrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Jogador'
 *       500:
 *         description: Erro interno do servidor
 */
jogadorRouter.get('/', (req, res) => JogadorService.getAllJogador(req, res));

/**
 * @swagger
 * /jogadores/{id}:
 *   get:
 *     summary: Retorna um jogador específico pelo ID
 *     tags: [Jogadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do jogador
 *     responses:
 *       200:
 *         description: Dados completos do jogador
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Jogador'
 *       404:
 *         description: Jogador não encontrado
 *       400:
 *         description: ID inválido fornecido
 */
jogadorRouter.get('/:id',(req,res)=> JogadorService.squardSelectJogadoresID(req,res))

/**
 * @swagger
 * /jogadores/nacionalidade/{nacionalidade}:
 *   get:
 *     summary: Retorna jogadores por nacionalidade
 *     tags: [Jogadores]
 *     parameters:
 *       - in: path
 *         name: nacionalidade
 *         required: true
 *         schema:
 *           type: string
 *         description: 'Nacionalidade dos jogadores (ex: "Brasileiro", "Argentino")'
 *     responses:
 *       200:
 *         description: Lista de jogadores da nacionalidade especificada
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Jogador'
 *       404:
 *         description: Nenhum jogador encontrado com esta nacionalidade
 *       400:
 *         description: Parâmetro de nacionalidade inválido
 */
jogadorRouter.get('/nacionalidade/:nacionalidade', (req, res) => JogadorService.getNacionalidade(req, res))


/**
 * @swagger
 * /jogadores:
 *   post:
 *     summary: Cria um novo jogador
 *     tags: [Jogadores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Jogador'
 *     responses:
 *       201:
 *         description: Jogador criado com sucesso
 *       400:
 *         description: Dados inválidos fornecidos
 *       500:
 *         description: Erro interno do servidor
 */
jogadorRouter.post('/', async (req, res) => {
    try {
        const novoJogador = await JogadorService.createJogador(req.body);
        res.status(201).json(novoJogador);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar o jogador.', error: error.message });
    }
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Jogador:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do jogador
 *         nome:
 *           type: string
 *           description: Nome completo do jogador
 *         posicao:
 *           type: string
 *           description: Posição principal do jogador
 *         nacionalidade:
 *           type: string
 *           description: Nacionalidade do jogador
 *         time_id:
 *           type: integer
 *           description: ID do time ao qual o jogador pertence
 *         data_nascimento:
 *           type: string
 *           format: date
 *           description: Data de nascimento do jogador (YYYY-MM-DD)
 *       example:
 *         id: 1
 *         nome: "Lionel Messi"
 *         posicao: "Atacante"
 *         nacionalidade: "Argentino"
 *         time_id: 10
 *         data_nascimento: "1987-06-24"
 */




export default jogadorRouter;