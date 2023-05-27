import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Afiliado } from 'src/app/core/models/afiliado.model';
import { HeaderService } from 'src/app/core/services/header.service';
import { AfiliadoService } from '../../services/afiliado.service';
import { AfiliadoMapperService } from '../../services/afiliado-mapper.service';
import { AfiliadoAPI } from 'src/app/core/models/DTO/afiliadoAPI.model';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-afiliados-modificar',
  templateUrl: './afiliados-modificar.component.html',
  styleUrls: ['./afiliados-modificar.component.css']
})
export class AfiliadosModificarComponent implements OnInit, OnDestroy{

  private sub!: Subscription;
  private idAfiliado?: number;
  protected afiliado!: Afiliado;

  constructor(
      private headerService: HeaderService, 
      private route: ActivatedRoute,
      private router: Router,
      private serviceAfiliado: AfiliadoService,
      private afiliadoMapper: AfiliadoMapperService,
      private notificationService: NotificationService,
    ){
      this.headerService.setHeader('Afiliados - Actualizar afiliado');
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.idAfiliado = Number(params['id']);
       this.getAfiliado(this.idAfiliado);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getAfiliado(id: number): void{
    this.serviceAfiliado.getAfiliadoById(id).subscribe(data => {
      this.afiliado =  this.afiliadoMapper.afiliadoAPIToAfiliadoNoId(data);
      console.log(this.afiliado);
    });
  }

  updateAfiliado($element: Afiliado){
    let afiliadoAPI: AfiliadoAPI = this.afiliadoMapper.afiliadoToAfilidoAPI($element);
    if(this.idAfiliado){
      this.serviceAfiliado.updateAfiliado(this.idAfiliado, afiliadoAPI).subscribe(data => {
          this.notificationService.openNotification('Afiliado modificado correctamente', 'Aceptar');
        }, 
        null,
        () => {
          this.router.navigate(['afiliados']);
        });
    }
  }
  
}
