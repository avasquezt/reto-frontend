import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Afiliado } from 'src/app/core/models/afiliado.model';
import { HeaderService } from 'src/app/core/services/header.service';
import { TableActionColumn } from 'src/app/shared/models/TableActionColumn.model';
import { TableColumn } from 'src/app/shared/models/TableColumn.model';
import { AfiliadoService } from '../../services/afiliado.service';
import { AfiliadoMapperService } from '../../services/afiliado-mapper.service';

@Component({
  selector: 'app-afiliados-listar',
  templateUrl: './afiliados-listar.component.html',
  styleUrls: ['./afiliados-listar.component.css']
})
export class AfiliadosListarComponent implements OnInit{

  afiliados!: Afiliado[];
  columns!: TableColumn[];
  actionColumn!: TableActionColumn;
  
  constructor(private headerService: HeaderService, 
              private router: Router, 
              private serviceAfiliado: AfiliadoService,
              private afiiadoMapper: AfiliadoMapperService,
  ){}

  ngOnInit(): void {
    
    this.headerService.setHeader('Afiliados');
    
    this.getAfiliados();
  
    this.columns = [
      {columnDef: 'id', header:'Id Afiliado', type: 'number'},
      {columnDef: 'nombre', header:'Nombre', type: 'string',},
      {columnDef: 'edad', header:'Edad', type: 'number'},
      {columnDef: 'correo', header:'Correo Electrónico', type: 'string'},
    ]
  
    this.actionColumn = {header:'Opciones', leftIcon: 'update', rightIcon:'delete_outlined'};
  }

  getAfiliados(): void{
    this.serviceAfiliado.getAfiliados().subscribe(data => {
      this.afiliados = data.map(afiliadoAPI => this.afiiadoMapper.afiliadoAPIToAfiliado(afiliadoAPI));
    });
  }

  updateAfiliado($element: Afiliado): void{
    console.info($element);
    this.router.navigate(['afiliados/modificar', $element.id]);
  }
  
  deleteAfiliado($element: Afiliado): void{
    $element.id && this.serviceAfiliado.deleteAfiliado($element.id).subscribe(data => {
        console.log(data);
        // this.citas = this.citas.filter(e => e.id != $element.id);
        }, 
        null,
        () => {
          this.resetPage()
      });
  }

  resetPage(): void{
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['afiliados']);
  }

}
