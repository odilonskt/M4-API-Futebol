import express from "express";
import bodyParser from "body-parser";
import jogadorRouter from "./routes/jogadores.routes.js";
import timeRouter from "./routes/time.routes.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpecs from "./util/swagger.config.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar JSON
app.use(bodyParser.json());

// Documentação Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Rotas principais
app.use("/jogadores", jogadorRouter);
app.use("/times", timeRouter);

app.listen(PORT, () => {
    console.log("\n==============================");
    console.log("\x1b[32m%s\x1b[0m", `✅ Servidor rodando em: http://localhost:${PORT}`);
    console.log("\x1b[32m%s\x1b[0m", `📄 Documentação disponível em: http://localhost:${PORT}/api-docs`);
    console.log("==============================\n");
});