import express from "express";
import cors from 'cors';
import { expositorRouter } from "./routes/expositor.router";

const app = express();
const port = 3000;


app.use(express.json())

app.use(cors());



//Rotas
app.use("/api", expositorRouter);





app.listen(port, (error) => {
  if (error) {
    console.log(`Houve algum erro no servidor: ${error}`);
  } else {
    console.log(`Servidor rodando em: https://localhost:${port}/api`)
  }
})

