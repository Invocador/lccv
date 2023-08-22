import { NgModule } from "@angular/core";
import { HomeModule } from "./home/home.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BuscaComponent } from "./busca/busca.component";

// Material Modules
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import{ MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { DadosComponent } from "./dados-nome/dados-nome.component";
import { CommonModule } from "@angular/common";
import { SpinnerModule, ModalModule } from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';


const MATERIAL_MODULES = [MatFormFieldModule, MatInputModule, MatSelectModule];

@NgModule({
    declarations: [BuscaComponent, DadosComponent],
    imports: [HomeModule,
        ReactiveFormsModule,
        FormsModule,
        ...MATERIAL_MODULES,
        HttpClientModule,
        CommonModule,
        SpinnerModule,
        ModalModule,
        IconModule],
    providers: [IconSetService],
    exports: [BuscaComponent, DadosComponent, ...MATERIAL_MODULES]
})

export class CoreModule{};