# ⚽ API-Futebol

Esta API permite requisitar informações sobre **jogadores** e **times de futebol**, com filtros por ID, nacionalidade e país.

---

## 🚀 Tecnologias utilizadas
- Node.js
- Express
- Nodemon

---

## 🧑‍💻 Como rodar o projeto

1. Instale as dependências:
```bash
npm i express nodemon
```
2. Comando para inicializar:

rodando com nodemon:
  ```bash
npm run dev 
```
rodando com node:
```bash
npm start
```
 Endpoints da API
 
 🔹 GET:
```bash
/jogadores
```
Retorna todos os jogadores cadastrados.

🔹 GET:
```bash
/times
```
Retorna todos os times cadastrados.

🔹 GET:
```bash
/jogadores/:id
```
Retorna os dados de um jogador específico pelo ID.

🔹 GET:
```bash
/times/:id
```
Retorna os dados de um time específico pelo ID.

🔹 GET:
```bash
/times/pais/:pais
```
Retorna todos os times de um determinado país.

Exemplo: 
```bash
/times/pais/Brasil
```
🔹 GET:
```bash
/times/:id/jogadores
```
Retorna todos os jogadores que pertencem ao time com o ID informado.

🔹 GET:
```bash
/jogadores/nacionalidade/:nacionalidade
```
Retorna todos os jogadores de uma determinada nacionalidade.

Exemplo:
```bash
/jogadores/nacionalidade/Brasileira
```
🔹 GET:
```bash
/times/cal/maximo
```
Retorna os times que tem o maximo de gol possivel.
🔹 GET:
```bash
/times/cal/minimo
```
Retorna todos os time que tem o minimo de gol possivel.

🔹 GET:
```bash
/times/cal/media
```
Retorna todos os times que estão na media de gol no bando de dados mocado  
