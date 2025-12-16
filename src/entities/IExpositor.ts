export interface Expositor {
  id: number,
  nome: string,
  email: string,
  senha: string,
  turma_curso: string,
  contato: string,
  descricao: string,
  visita: number
}


export interface ExpositorCadastro {
  nome: string;
  email: string,
  senha: string,
  turma_curso: string;
  contato: string | null,
  descricao: string | null,
}