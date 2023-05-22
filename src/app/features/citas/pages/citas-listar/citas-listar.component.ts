import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/core/models/cita.model';
import { HeaderService } from 'src/app/core/services/header.service';
import { TableActionColumn } from 'src/app/shared/models/TableActionColumn.model';
import { TableColumn } from 'src/app/shared/models/TableColumn.model';

@Component({
  selector: 'app-citas-listar',
  templateUrl: './citas-listar.component.html',
  styleUrls: ['./citas-listar.component.css']
})
export class CitasListarComponent implements OnInit {
  
  citas!: Cita[];
  columns!: TableColumn[];
  actionColumn!: TableActionColumn;
  
  constructor(private headerService: HeaderService, private router: Router){}
  
  ngOnInit(): void {
    
    this.headerService.setHeader('Citas');
    
    this.getUsers();
  
    this.columns = [
      {columnDef: 'id', header:'Id Cita', type: 'number'},
      {columnDef: 'fecha', header:'Fecha', type: 'date', dateFormat:'dd/MM/yyyy'},
      {columnDef: 'hora', header:'Hora', type: 'string'},
      {columnDef: 'test', header:'Id Test', type: 'number'},
      {columnDef: 'usuario', header:'Id Afiliado', type: 'number'},
    ]
  
    this.actionColumn = {header:'Opciones', leftIcon: 'update', rightIcon:'delete_outlined'};
  }
  
  updateCita($element: Cita): void{
    console.info($element);
    this.router.navigate(['citas/modificar', $element.id]);
  }
  
  deleteCita($element: Cita): void{
    console.warn($element);
    this.citas = this.citas.filter(e => e.id != $element.id);
  }
  
  getUsers(): void{
    this.citas = [
      {id: 1, fecha: new Date('2023-05-18T00:00'), hora: "10:30", usuario: 1, test: 1},
      {id: 2, fecha: new Date('2023-01-01T00:00'), hora: "15:30", usuario: 2, test: 1},
      {id: 3, fecha: new Date('2023-12-31T00:00'), hora: "00:00", usuario: 1, test: 3},
    ]
  }

}