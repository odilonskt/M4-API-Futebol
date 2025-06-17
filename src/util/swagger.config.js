import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Futebol",
            version: "1.0.0",
            description: "Documentação da API para gerenciamento de times e jogadores.",
        },
        servers: [
            {
                url: "https://m4-api-futebol.onrender.com", // Altere se necessário
            },
        ],
    },
    apis: ["./src/routes/*.js"], // Caminho para os arquivos de rotas
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

export default swaggerSpecs;