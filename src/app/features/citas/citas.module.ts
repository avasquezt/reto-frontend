import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { CitasComponent } from './citas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CitasAgregarComponent } from './citas-agregar/citas-agregar.component';
import { CitasModificarComponent } from './citas-modificar/citas-modificar.component';
import { CitasListarComponent } from './citas-listar/citas-listar.component';
import { FormCitasComponent } from './components/form-citas/form-citas.component';


@NgModule({
  declarations: [
    CitasComponent,
    CitasAgregarComponent,
    CitasModificarComponent,
    CitasListarComponent,
    FormCitasComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    SharedModule
  ]
})
export class CitasModule { }
