import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { PruebasRoutingModule } from './pruebas-routing.module';
import { PruebasComponent } from './pruebas.component';
import { FormPruebasComponent } from './components/form-pruebas/form-pruebas.component';
import { PruebasModificarComponent } from './pages/pruebas-modificar/pruebas-modificar.component';
import { PruebasAgregarComponent } from './pages/pruebas-agregar/pruebas-agregar.component';
import { PruebasListarComponent } from './pages/pruebas-listar/pruebas-listar.component';


@NgModule({
  declarations: [
    PruebasComponent,
    FormPruebasComponent,
    PruebasModificarComponent,
    PruebasAgregarComponent,
    PruebasListarComponent
  ],
  imports: [
    CommonModule,
    PruebasRoutingModule,
    SharedModule,
  ]
})
export class PruebasModule { }
