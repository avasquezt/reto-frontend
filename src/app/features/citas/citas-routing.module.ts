import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasComponent } from './citas.component';
import { CitasAgregarComponent } from './pages/citas-agregar/citas-agregar.component';
import { CitasModificarComponent } from './pages/citas-modificar/citas-modificar.component';
import { CitasListarComponent } from './pages/citas-listar/citas-listar.component';

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
