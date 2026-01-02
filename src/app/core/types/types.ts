export interface Promocao {
    id: number;
    destino: string;
    imagem: string;
    preco: number;
}

export interface UnidadeFederativa {
    id: number;
    nome: string;
    sigla: string;
}

export interface PessoaUsuaria {
    cidade: string;
    cpf: string;
    email: string;
    estado: UnidadeFederativa;
    nascimento: string;
    nome: string;
    senha: string;
    telefone: string;
}