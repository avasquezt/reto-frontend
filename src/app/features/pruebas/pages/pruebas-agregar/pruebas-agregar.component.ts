import { Component } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';
import { PruebaService } from '../../services/prueba.service';
import { PruebaMapperService } from '../../services/prueba-mapper.service';
import { Router } from '@angular/router';
import { Prueba } from 'src/app/core/models/prueba.model';
import { PruebaAPI } from 'src/app/core/models/DTO/pruebaAPI.model';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-pruebas-agregar',
  templateUrl: './pruebas-agregar.component.html',
  styleUrls: ['./pruebas-agregar.component.css']
})
export class PruebasAgregarComponent {

  constructor(
    private headerService: HeaderService,
    private servicePrueba: PruebaService,
    private pruebaMapper: PruebaMapperService,
    private router: Router,
    private notificationService: NotificationService,
    ){
      this.headerService.setHeader('Pruebas - nueva prueba');
  }

  createPrueba($element: Prueba){
    let pruebaAPI: PruebaAPI = this.pruebaMapper.pruebaToPruebaAPI($element);
    this.servicePrueba.createPrueba(pruebaAPI).subscribe(data => {
      this.notificationService.openNotification('Prueba creada correctamente', 'Aceptar');
    }, 
    null,
    () => {
      this.router.navigate(['pruebas']);
    });
  }

}
