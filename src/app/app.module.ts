import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { GlobalHttpInterceptor } from './core/interceptors/global-http.interceptor';
// Modules
import { SharedModule } from './shared/shared.module';

// Components
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ConsultasComponent } from './features/consultas/consultas.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { GlobalErrorComponent } from './core/components/global-error/global-error.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConsultasComponent,
    PageNotFoundComponent,
    GlobalErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    SharedModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptor, multi: true  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
