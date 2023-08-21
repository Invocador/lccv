import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DadosInterface } from "../interfaces/dados.interface";

@Injectable({
    providedIn: 'root'
})
export class BuscaService {
    uri = 'https://servicodados.ibge.gov.br/api/v2/censos';
    constructor(private httpClient: HttpClient) {};

    buscaPorNome(nome:string): Observable<DadosInterface[]> {
        const url = this.uri + '/nomes/'+nome;
        return this.httpClient.get<DadosInterface[]>(url);
    }
}