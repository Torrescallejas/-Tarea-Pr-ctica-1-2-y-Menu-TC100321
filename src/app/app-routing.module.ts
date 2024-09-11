import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CompaComponent } from './compa/compa.component';

const routes: Routes = [
  {path: 'calculadora', component: CalculadoraComponent},
  {path: 'compa', component: CompaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
