import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { BuscaService } from "../services/busca.service";
import { take } from "rxjs";
import { DadosInterface } from "../interfaces/dados.interface";

@Component ({
      selector: 'app-dados-nome',
      templateUrl: './dados-nome.component.html',
      styleUrls: ['./dados-nome.component.scss']
})
export class DadosComponent implements OnInit {
    dadosNome!: DadosInterface;
    constructor(private router: Router,
        private route: ActivatedRoute,
        private buscaService: BuscaService
        ) {};

    ngOnInit(): void {
        this.buscaPorNome();
    };
        retornaParaBusca() :void {
            this.router.navigateByUrl('/home/busca');
        }
        buscaPorNome() :void {
            const nome = this.route.params.pipe(take(1)).subscribe(({ nome }) => {
                this.buscaService.buscaPorNome(nome).subscribe((res) => {
                    this.dadosNome = res[0];
                });
            });
        }
    }
