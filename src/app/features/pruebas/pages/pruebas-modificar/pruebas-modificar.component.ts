import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Prueba } from 'src/app/core/models/prueba.model';
import { HeaderService } from 'src/app/core/services/header.service';
import { PruebaService } from '../../services/prueba.service';
import { PruebaMapperService } from '../../services/prueba-mapper.service';
import { PruebaAPI } from 'src/app/core/models/DTO/pruebaAPI.model';

@Component({
  selector: 'app-pruebas-modificar',
  templateUrl: './pruebas-modificar.component.html',
  styleUrls: ['./pruebas-modificar.component.css']
})
export class PruebasModificarComponent implements OnInit, OnDestroy{

  private sub!: Subscription;
  private idPrueba?: number;
  protected prueba!: Prueba;

  constructor(
      private headerService: HeaderService, 
      private route: ActivatedRoute,
      private router: Router,
      private servicePrueba: PruebaService,
      private pruebaMapper: PruebaMapperService,
    ){
      this.headerService.setHeader('Pruebas - Actualizar prueba');
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.idPrueba = Number(params['id']);
       this.getPrueba(this.idPrueba);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getPrueba(id: number): void{
    this.servicePrueba.getPruebaById(id).subscribe(data => {
      this.prueba =  this.pruebaMapper.pruebaAPIToPruebaNoId(data);
    });
  }

  updatePrueba($element: Prueba){
    let pruebaAPI: PruebaAPI = this.pruebaMapper.pruebaToPruebaAPI($element);
    if(this.idPrueba){
      this.servicePrueba.updatePrueba(this.idPrueba, pruebaAPI).subscribe(data => {
          console.log(data);
        }, 
        null,
        () => {
          this.router.navigate(['pruebas']);
        });
    }
  }
}
