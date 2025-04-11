import express from 'express'
import jogadorRouter from './routes/jogadores.routes.js'
import timeRouter from './routes/time.routes.js'
 
const app = express()

const PORT = 3000

app.use(express.json());

//rota pricipal
app.use("/jogadores",jogadorRouter)



//rota principal
app.use("/times", timeRouter);

app.listen(PORT, ()=>{
 console.log(`rodando nessa porta ${PORT}`)
})