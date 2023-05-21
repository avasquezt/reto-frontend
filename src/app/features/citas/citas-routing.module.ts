import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasComponent } from './citas.component';
import { CitasAgregarComponent } from './citas-agregar/citas-agregar.component';
import { CitasModificarComponent } from './citas-modificar/citas-modificar.component';
import { CitasListarComponent } from './citas-listar/citas-listar.component';

const routes: Routes = [
  {path:'', component:CitasComponent, children:[
    {path:'', component:CitasListarComponent},
    {path:'agregar', component:CitasAgregarComponent},
    {path:'modificar', component:CitasModificarComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
