import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

// Modiles
import { SharedModule } from './shared/shared.module';

// Components
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ConsultasComponent } from './features/consultas/consultas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConsultasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
