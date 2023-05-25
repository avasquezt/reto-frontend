import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PruebasComponent } from './pruebas.component';
import { PruebasListarComponent } from './pages/pruebas-listar/pruebas-listar.component';
import { PruebasAgregarComponent } from './pages/pruebas-agregar/pruebas-agregar.component';
import { PruebasModificarComponent } from './pages/pruebas-modificar/pruebas-modificar.component';

const routes: Routes = [
  {path:'', component:PruebasComponent, children:[
    {path:'', component:PruebasListarComponent},
    {path:'agregar', component:PruebasAgregarComponent},
    {path:'modificar/:id', component:PruebasModificarComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebasRoutingModule { }
