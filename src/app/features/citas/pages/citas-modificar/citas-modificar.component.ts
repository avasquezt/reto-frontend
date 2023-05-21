import { Component } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-citas-modificar',
  templateUrl: './citas-modificar.component.html',
  styleUrls: ['./citas-modificar.component.css']
})
export class CitasModificarComponent {

  constructor(private headerService: HeaderService){
    this.headerService.setHeader('Citas - Actualizar cita');
  }

}
