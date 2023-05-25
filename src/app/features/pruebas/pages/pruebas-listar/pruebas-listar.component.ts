import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Prueba } from 'src/app/core/models/prueba.model';
import { HeaderService } from 'src/app/core/services/header.service';
import { TableActionColumn } from 'src/app/shared/models/TableActionColumn.model';
import { TableColumn } from 'src/app/shared/models/TableColumn.model';
import { PruebaService } from '../../services/prueba.service';
import { PruebaMapperService } from '../../services/prueba-mapper.service';

@Component({
  selector: 'app-pruebas-listar',
  templateUrl: './pruebas-listar.component.html',
  styleUrls: ['./pruebas-listar.component.css']
})
export class PruebasListarComponent {

  pruebas!: Prueba[];
  columns!: TableColumn[];
  actionColumn!: TableActionColumn;
  
  constructor(private headerService: HeaderService, 
              private router: Router, 
              private servicePrueba: PruebaService,
              private pruebaMapper: PruebaMapperService,
  ){}

  ngOnInit(): void {
    
    this.headerService.setHeader('Pruebas');
    
    this.getPruebas();
  
    this.columns = [
      {columnDef: 'id', header:'Id Prueba', type: 'number'},
      {columnDef: 'nombre', header:'Nombre', type: 'string',},
      {columnDef: 'descripcion', header:'Descripción', type: 'string'},
    ]
  
    this.actionColumn = {header:'Opciones', leftIcon: 'update', rightIcon:'delete_outlined'};
  }

  getPruebas(): void{
    this.servicePrueba.getPruebas().subscribe(data => {
      this.pruebas = data.map(pruebaAPI => this.pruebaMapper.pruebaAPIToPrueba(pruebaAPI));
    });
  }

  updatePrueba($element: Prueba): void{
    console.info($element);
    this.router.navigate(['pruebas/modificar', $element.id]);
  }
  
  deletePrueba($element: Prueba): void{
    $element.id && this.servicePrueba.deletePrueba($element.id).subscribe(data => {
        console.log(data);
        }, 
        null,
        () => {
          this.resetPage()
      });
  }

  resetPage(): void{
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['pruebas']);
  }

}
