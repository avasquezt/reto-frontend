import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormCitasComponent } from './components/form-citas/form-citas.component';

import { CitasRoutingModule } from './citas-routing.module';
import { CitasComponent } from './citas.component';
import { CitasAgregarComponent } from './pages/citas-agregar/citas-agregar.component';
import { CitasModificarComponent } from './pages/citas-modificar/citas-modificar.component';
import { CitasListarComponent } from './pages/citas-listar/citas-listar.component';


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
  ],
  providers:[]
})
export class CitasModule {}