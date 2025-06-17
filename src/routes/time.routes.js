import { Router } from "express";
import TimeService from "../service/time.service.js";

const timeRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Times
 *   description: Operações relacionadas a times de futebol
 */

/**
 * @swagger
 * /times:
 *   get:
 *     summary: Retorna todos os times
 *     tags: [Times]
 *     responses:
 *       200:
 *         description: Lista de times.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Time'
 */
timeRouter.get("/", async (req, res) => {
    try {
        const times = await TimeService.getAllTime();
        res.status(200).json(times);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar os times.", error: error.message });
    }
});

/**
 * @swagger
 * /times/{id}:
 *   get:
 *     summary: Retorna um time pelo ID
 *     tags: [Times]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do time
 *     responses:
 *       200:
 *         description: Dados do time.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Time'
 *       404:
 *         description: Time não encontrado.
 */
timeRouter.get("/:id", (req, res) => TimeService.squardSelectTimeID(req, res));

/**
 * @swagger
 * /times/{id}/jogadores:
 *   get:
 *     summary: Retorna todos os jogadores que fazem parte do time
 *     tags: [Times]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do time
 *     responses:
 *       200:
 *         description: Lista de jogadores do time.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Jogador'
 *       404:
 *         description: Time não encontrado ou sem jogadores.
 */
timeRouter.get('/:id/jogadores',(req, res) => TimeService.getJogadoresDoTime(req, res))

/**
 * @swagger
 * /times/pais/{pais}:
 *   get:
 *     summary: Retorna todos os times de um país específico
 *     tags: [Times]
 *     parameters:
 *       - in: path
 *         name: pais
 *         required: true
 *         schema:
 *           type: string
 *         description: Nome do país
 *     responses:
 *       200:
 *         description: Lista de times do país.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Time'
 *       404:
 *         description: Nenhum time encontrado para este país.
 */
timeRouter.get('/pais/:pais', (req, res) => TimeService.getPais(req, res));

/**
 * @swagger
 * /times/cal/maximo:
 *   get:
 *     summary: Retorna o time com o máximo de gols
 *     tags: [Times]
 *     responses:
 *       200:
 *         description: Time com o maior número de gols.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Time'
 */
timeRouter.get('/cal/maximo', (req, res) => TimeService.getMaxByGol(req, res));

/**
 * @swagger
 * /times/cal/minimo:
 *   get:
 *     summary: Retorna o time com o mínimo de gols
 *     tags: [Times]
 *     responses:
 *       200:
 *         description: Time com o menor número de gols.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Time'
 */
timeRouter.get('/cal/minimo', (req, res) => TimeService.getMinByGol(req, res));

/**
 * @swagger
 * /times/cal/media:
 *   get:
 *     summary: Retorna a média de gols de todos os times
 *     tags: [Times]
 *     responses:
 *       200:
 *         description: Média de gols dos times.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mediaGols:
 *                   type: number
 *                   format: float
 *                   description: Média de gols dos times
 */
timeRouter.get('/cal/media',(req,res)=> TimeService.getMediaByGols(req, res));

/**
 * @swagger
 * /times:
 *   post:
 *     summary: Cria um novo time
 *     tags: [Times]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Time'
 *     responses:
 *       201:
 *         description: Time criado com sucesso
 *       400:
 *         description: Dados inválidos fornecidos
 *       500:
 *         description: Erro interno do servidor
 */
timeRouter.post('/', async (req, res) => {
    try {
        const novoTime = await TimeService.createTime(req.body);
        res.status(201).json(novoTime);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar o time.', error: error.message });
    }
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Time:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do time
 *         nome:
 *           type: string
 *           description: Nome do time
 *         pais:
 *           type: string
 *           description: País de origem do time
 *         gols:
 *           type: integer
 *           description: Total de gols marcados pelo time
 *       example:
 *         id: 1
 *         nome: "Flamengo"
 *         pais: "Brasil"
 *         gols: 150
 *     Jogador:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do jogador
 *         nome:
 *           type: string
 *           description: Nome do jogador
 *         idade:
 *           type: integer
 *           description: Idade do jogador
 *         nacionalidade:
 *           type: string
 *           description: Nacionalidade do jogador
 *         timeId:
 *           type: integer
 *           description: ID do time ao qual o jogador pertence
 *       example:
 *         id: 1
 *         nome: "Gabriel Barbosa"
 *         idade: 26
 *         nacionalidade: "Brasileiro"
 *         timeId: 1
 */

export default timeRouter;