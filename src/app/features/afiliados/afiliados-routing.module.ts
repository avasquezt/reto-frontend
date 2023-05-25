import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AfiliadosComponent } from './afiliados.component';
import { AfiliadosListarComponent } from './pages/afiliados-listar/afiliados-listar.component';
import { AfiliadosAgregarComponent } from './pages/afiliados-agregar/afiliados-agregar.component';
import { AfiliadosModificarComponent } from './pages/afiliados-modificar/afiliados-modificar.component';

const routes: Routes = [
  {path:'', component:AfiliadosComponent, children:[
    {path:'', component:AfiliadosListarComponent},
    {path:'agregar', component:AfiliadosAgregarComponent},
    {path:'modificar/:id', component:AfiliadosModificarComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfiliadosRoutingModule { }
