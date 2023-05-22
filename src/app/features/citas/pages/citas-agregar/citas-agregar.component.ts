import { Component } from '@angular/core';
import { Cita } from 'src/app/core/models/cita.model';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-citas-agregar',
  templateUrl: './citas-agregar.component.html',
  styleUrls: ['./citas-agregar.component.css']
})
export class CitasAgregarComponent {

  constructor(private headerService: HeaderService){
    this.headerService.setHeader('Citas - Nueva cita');
  }

}