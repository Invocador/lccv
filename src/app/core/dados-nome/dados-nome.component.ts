import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { DadosInterface } from "../interfaces/dados.interface";
import { Location } from "@angular/common";

@Component ({
      selector: 'app-dados-nome',
      templateUrl: './dados-nome.component.html',
      styleUrls: ['./dados-nome.component.scss']
})
export class DadosComponent implements OnInit {
    dadosNome?: DadosInterface;

    constructor(private router: Router,
        private location: Location
        ) {};

    ngOnInit(): void {
        this.dadosNome = this.location.getState() as DadosInterface;
    };

    retornaParaBusca() :void {
        this.router.navigateByUrl('/home/busca');
    }

}

// {{dado.periodo.split('[').join('').split(',').join(', ')}}