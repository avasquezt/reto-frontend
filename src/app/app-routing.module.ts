import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasComponent } from './features/consultas/consultas.component';

const routes: Routes = [
  {path:'', redirectTo:'consultas', pathMatch:'full'},
  {path:'consultas', title: 'Consultas', component:ConsultasComponent},
  {path:'citas', title: 'Citas' ,loadChildren:() => import('../app/features/citas/citas.module').then(e => e.CitasModule)},
  {path:'afiliados', title: 'Afiliados' ,loadChildren:() => import('../app/features/afiliados/afiliados.module').then(e => e.AfiliadosModule)},
  {path:'pruebas', title: 'Pruebas' ,loadChildren:() => import('../app/features/pruebas/pruebas.module').then(e => e.PruebasModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
