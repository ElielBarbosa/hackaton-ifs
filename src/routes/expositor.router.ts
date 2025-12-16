import { Router } from 'express';
import { ExpositorController } from '../controller/expositor.controller';

export const expositorRouter = Router();
const expositorController = new ExpositorController();

//Rotas de listar expositores
expositorRouter.get("/expositores", expositorController.listarExpositores);

//Rotas de listar expositores
expositorRouter.get("/expositores/:id", expositorController.buscarExpositorPorId);

//Rotas de cadastro de expositor
expositorRouter.post("/expositores", expositorController.criarExpositor);