import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { BuscaComponent } from "../busca/busca.component";
import { DadosComponent } from "../dados-nome/dados-nome.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'busca',
        component: BuscaComponent
    },
    {
        path: 'dados/:nome',
        component: DadosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}