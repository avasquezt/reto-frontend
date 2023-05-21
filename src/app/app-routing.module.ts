import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasComponent } from './features/consultas/consultas.component';

const routes: Routes = [
  {path:'', redirectTo:'consultas', pathMatch:'full'},
  {path:'consultas', title: 'Consultas', component:ConsultasComponent},
  {path:'citas', title: 'Citas' ,loadChildren:() => import('../app/features/citas/citas.module').then(e => e.CitasModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
