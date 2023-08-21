import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from "@angular/core";
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BuscaService } from "../services/busca.service";
@Component ({
      selector: 'app-busca',
      templateUrl: './busca.component.html',
      styleUrls: ['./busca.component.scss']
})

export class BuscaComponent implements OnInit {

    isLoading: boolean = false;

    @ViewChild('alertError') alertError : any;

    form! : FormGroup;
    constructor(private router: Router, private buscaService: BuscaService, private el: ElementRef, private renderer: Renderer2) {
        this.form = new FormGroup({
            nome: new FormControl(null, Validators.required),
        });
    }

    ngOnInit(): void {}

    returnToHome() :void {
        this.router.navigateByUrl('/home');
    }

    searchByName() :void {
        this.isLoading = true;
        const { nome } = this.form.value;

        if(nome === null || nome.includes(' ')) {
            this.renderer.addClass(this.alertError.nativeElement, 'open');
            return;
        };

        this.renderer.removeClass(this.alertError.nativeElement, 'open');

        this.router.navigateByUrl(`home/dados/${nome}`);
    }
}