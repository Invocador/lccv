import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from "@angular/core";
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BuscaService } from "../services/busca.service";
import { IconSetService } from '@coreui/icons-angular';
import { cilPaperPlane, brandSet, cilSad } from '@coreui/icons';



@Component ({
      selector: 'app-busca',
      templateUrl: './busca.component.html',
      styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

    isLoading: boolean = false;
    visible: boolean = false;

    @ViewChild('alertError') alertError : any;

    form! : FormGroup;
    constructor(private router: Router, private buscaService: BuscaService, private el: ElementRef, private renderer: Renderer2, public iconSet: IconSetService) {
        this.form = new FormGroup({
            nome: new FormControl(null, Validators.required),
        });

        iconSet.icons = { cilPaperPlane, cilSad };
    }

    ngOnInit(): void {}

    returnToHome() :void {
        this.router.navigateByUrl('/home');
    }

    toggleLiveDemo(): void {
        this.visible = !this.visible;
    }

    searchByName() :void {
        this.isLoading = true;
        const { nome } = this.form.value;

        if(nome === null || nome.includes(' ')) {
            this.isLoading = false;
            this.renderer.addClass(this.alertError.nativeElement, 'open');
            return;
        };

        this.renderer.removeClass(this.alertError.nativeElement, 'open');

        this.buscaService.buscaPorNome(nome).subscribe(resp => {
            if (resp.length > 0){
                this.router.navigateByUrl(`home/dados/${nome}`, {state: resp[0]});
            } else {
                this.visible = true;
                this.isLoading = false;
            }
        });
    };
}