import { Expositor, ExpositorCadastro } from "../entities/IExpositor";
import { prisma } from "../prisma";

export class ExpositorRepository {
  constructor() { }

  async listarExpositores(offset: number = 0, limit: number = 30): Promise<Expositor[] | null> {
    const rows = await prisma.$queryRaw`
      select expositor_id, 
              nome, 
              contato, 
              visita from expositor offset ${offset} limit ${limit}
    `;
    return rows;
  }

  async buscarExpositorPorId(id: number): Promise<Expositor | null> {
    const rows = await prisma.$queryRaw`
      select expositor_id, 
        nome, 
        contato,  
        turma_curso, 
        contato, 
        descricao_venda,
        visita from 
        expositor where expositor_id = ${id};
    `;
    return rows;
  }


  async criarExpositor(nome: string, email: string, senha: string, turma_curso: string): Promise<void> {
    const novoExpositor = await prisma.expositor.create({
      data: {
        nome: nome,
        email: email,
        senha: senha,
        turma_curso: turma_curso
      }
    });
  }
}