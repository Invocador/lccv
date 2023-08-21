export interface DadosInterface {
    nome: string;
    sexo: string | null;
    localidade: string;
    res: DadosResInterface[];
}

export interface DadosResInterface {
    periodo: string,
    frequencia: number
}