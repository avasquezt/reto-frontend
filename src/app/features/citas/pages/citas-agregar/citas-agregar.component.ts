import { Component } from '@angular/core';
import { CitaAPI } from 'src/app/core/models/DTO/citaAPI.model';
import { Cita } from 'src/app/core/models/cita.model';
import { HeaderService } from 'src/app/core/services/header.service';
import { CitaService } from '../../services/cita.service';
import { CitaMapperService } from '../../services/cita-mapper.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-citas-agregar',
  templateUrl: './citas-agregar.component.html',
  styleUrls: ['./citas-agregar.component.css']
})
export class CitasAgregarComponent {

  constructor(
    private headerService: HeaderService,
    private serviceCita: CitaService,
    private citaMapper: CitaMapperService,
    private router: Router,
    private notificationService: NotificationService,
    ){
      this.headerService.setHeader('Citas - Nueva cita');
  }

  createCita($element: Cita){
    let citaAPI: CitaAPI = this.citaMapper.citaToCitaAPI($element);
    this.serviceCita.createCita(citaAPI).subscribe(data => {
      console.log(data);
      this.notificationService.openNotification('Cita creada correctamente', 'Aceptar');
    }, 
    null,
    () => {
      this.router.navigate(['citas']);
    });
  }

}