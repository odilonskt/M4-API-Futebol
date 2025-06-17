# ⚽ API-Futebol

Esta API permite requisitar informações sobre **jogadores** e **times de futebol**, com filtros por ID, nacionalidade, país, maximo, minimo e a media.

---

## 🚀 Tecnologias utilizadas
- Node.js
- Express
- Nodemon
-  Primsa
 - Neon Postgres
---

## 🧑‍💻 Como rodar o projeto


 Endpoints da API
 🔹 rota principal:
 ```bash
https://m4-api-futebol.onrender.com
```

 🔹 rota da documentação do swagger:
 ```bash
https://m4-api-futebol.onrender.com/api-docs
```
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
Retorna todos os times que possuem o maior número de gols registrados no banco de dados mockado.

🔹 GET:
```bash
/times/cal/minimo
```
Retorna todos os times que possuem o menor número de gols registrados no banco de dados mockado.

🔹 GET:
```bash
/times/cal/media
```
Retorna todos os times que possuem um número de gols igual à média geral registrada no banco de dados mockado.
