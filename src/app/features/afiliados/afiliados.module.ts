import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { AfiliadosRoutingModule } from './afiliados-routing.module';
import { AfiliadosComponent } from './afiliados.component';
import { AfiliadosListarComponent } from './pages/afiliados-listar/afiliados-listar.component';
import { AfiliadosAgregarComponent } from './pages/afiliados-agregar/afiliados-agregar.component';
import { AfiliadosModificarComponent } from './pages/afiliados-modificar/afiliados-modificar.component';
import { FormAfiliadosComponent } from './components/form-afiliados/form-afiliados.component';


@NgModule({
  declarations: [
    AfiliadosComponent,
    AfiliadosListarComponent,
    AfiliadosAgregarComponent,
    AfiliadosModificarComponent,
    FormAfiliadosComponent
  ],
  imports: [
    CommonModule,
    AfiliadosRoutingModule,
    SharedModule.forRoot(),
  ]
})
export class AfiliadosModule { }
