import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cita } from 'src/app/core/models/cita.model';
import { HeaderService } from 'src/app/core/services/header.service';
import { CitaService } from '../../services/cita.service';
import { CitaMapperService } from '../../services/cita-mapper.service';
import { CitaAPI } from 'src/app/core/models/DTO/citaAPI.model';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-citas-modificar',
  templateUrl: './citas-modificar.component.html',
  styleUrls: ['./citas-modificar.component.css']
})
export class CitasModificarComponent implements OnInit, OnDestroy{

  private sub!: Subscription;
  private idCita?: number;
  protected cita!: Cita;

  constructor(
      private headerService: HeaderService, 
      private route: ActivatedRoute,
      private router: Router,
      private serviceCita: CitaService,
      private citaMapper: CitaMapperService,
      private notificationService: NotificationService,
    ){
      this.headerService.setHeader('Citas - Actualizar cita');
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.idCita = Number(params['id']);
       this.getCita(this.idCita);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getCita(id: number): void{
    this.serviceCita.getCitaById(id).subscribe(data => {
      this.cita =  this.citaMapper.citaAPIToCitaNoId(data);
    });
  }

  updateCita($element: Cita){
    let citaAPI: CitaAPI = this.citaMapper.citaToCitaAPI($element);
    if(this.idCita){
      this.serviceCita.updateCita(this.idCita, citaAPI).subscribe(data => {
          this.notificationService.openNotification('Cita modificada correctamente', 'Aceptar');
        }, 
        null,
        () => {
          this.router.navigate(['citas']);
        });
    }
  }

}
