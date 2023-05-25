import { Component } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';
import { AfiliadoService } from '../../services/afiliado.service';
import { AfiliadoMapperService } from '../../services/afiliado-mapper.service';
import { Router } from '@angular/router';
import { Afiliado } from 'src/app/core/models/afiliado.model';
import { AfiliadoAPI } from 'src/app/core/models/DTO/afiliadoAPI.model';

@Component({
  selector: 'app-afiliados-agregar',
  templateUrl: './afiliados-agregar.component.html',
  styleUrls: ['./afiliados-agregar.component.css']
})
export class AfiliadosAgregarComponent {

  constructor(
    private headerService: HeaderService,
    private serviceAfiliado: AfiliadoService,
    private afiliadoMapper: AfiliadoMapperService,
    private router: Router,
    ){
      this.headerService.setHeader('Afiliados - Nuevo afiliado');
  }

  createAfiliado($element: Afiliado){
    let afiliadoAPI: AfiliadoAPI = this.afiliadoMapper.afiliadoToAfilidoAPI($element);
    this.serviceAfiliado.createAfiliado(afiliadoAPI).subscribe(data => {
      console.log(data);
    }, 
    null,
    () => {
      this.router.navigate(['afiliados']);
    });
  }

}
