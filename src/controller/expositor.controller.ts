import { ExpositorRepository } from "../repository/expositor.repository";
import { Response, Request } from 'express'

export class ExpositorController {
  expositorRepository: ExpositorRepository;

  constructor() {
    this.expositorRepository = new ExpositorRepository;
  }
  //Exibe uma lista de expositores na rota
  listarExpositores = async (req: Request, res: Response) => {
    const expositores = await this.expositorRepository.listarExpositores();
    res.status(200).json(expositores);
  }

  //Exibe um expositor buscado por seu id
  buscarExpositorPorId = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const expositor = await this.expositorRepository.buscarExpositorPorId(id);

    console.log(expositor)
    res.status(200).json(expositor);
  }

  //Cadastra um novo expositor

  criarExpositor = (req: Request, res: Response) => {
    console.log(req.body);

    const { nome, email, senha, turma_curso } = req.body;


    this.expositorRepository.criarExpositor(nome, email, senha, turma_curso);

    res.json({ mensagem: "Conta de expositor criada com sucesso" })
  }



}