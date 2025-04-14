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

 Endpoints da API
🔹 GET /jogadores
Retorna todos os jogadores cadastrados.

🔹 GET /times
Retorna todos os times cadastrados.

🔹 GET /jogadores/:id
Retorna os dados de um jogador específico pelo ID.

🔹 GET /times/:id
Retorna os dados de um time específico pelo ID.

🔹 GET /times/pais/:pais
Retorna todos os times de um determinado país.
Exemplo: /times/pais/Brasil

🔹 GET /times/:id/jogadores
Retorna todos os jogadores que pertencem ao time com o ID informado.

🔹 GET /jogadores/nacionalidade/:nacionalidade
Retorna todos os jogadores de uma determinada nacionalidade.
Exemplo: /jogadores/nacionalidade/Brasileira
