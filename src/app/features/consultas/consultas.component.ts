import { animate, state, style, transition, trigger } from '@angular/animations';
import { identifierName } from '@angular/compiler';

import { ChangeDetectorRef, Component, QueryList, ViewChildren } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Afiliado } from 'src/app/core/models/afiliado';
import { Cita } from 'src/app/core/models/cita.model';
import { HeaderService } from 'src/app/core/services/header.service';
import { TableColumn } from 'src/app/shared/models/TableColumn.model';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ConsultasComponent {

  constructor(private headerService: HeaderService, private cd: ChangeDetectorRef){
    this.headerService.setHeader('Consultas');
  }
  
  dataSource!: MatTableDataSource<Afiliado>;
  usersData!: Afiliado[];
  columnsToDisplay! : string[];
  innerDisplayedColumns = ['street', 'zipCode', 'city'];
  expandedElement!: User | null;

  columns!: TableColumn[];
  citas!: Cita[];

  innerTableColumns!: TableColumn[];

  IdAfiliadoFilter: string | undefined;
  fechaFilter: Date | undefined;

  ngOnInit() {

    this.usersData = USERS;
    this.dataSource = new MatTableDataSource(this.usersData);

    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return String(data.id).startsWith(filter);
    };

    this.columns = [
      {columnDef: 'id', header:'Id Afiliado', type: 'number'},
      {columnDef: 'nombre', header:'Nombre', type: 'string'},
      {columnDef: 'edad', header:'Edad', type: 'number'},
      {columnDef: 'correo', header:'Correo', type: 'string'},
    ]

    this.innerTableColumns = [
      {columnDef: 'id', header:'Id', type: 'number'},
      {columnDef: 'fecha', header:'Fecha', type: 'date', dateFormat:'dd/MM/yyyy'},
      {columnDef: 'hora', header:'Hora', type: 'string'},
      {columnDef: 'test', header:'Nombre de prueba', type: 'number'}
    ]

    this.columnsToDisplay = ['expandIconColumn'].concat(this.columns.map(e => e.columnDef));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim();
  }

  filterAfiliado(){
    this.applyFilter(this.IdAfiliadoFilter || '');
  }

  filterFecha(){
    console.log(this.fechaFilter)
  }

  toggleRow(element: User) {
    // element.addresses && (element.addresses as MatTableDataSource<Address>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    // if(element.addresses && (element.addresses as MatTableDataSource<Address>).data.length){
    //   this.expandedElement = this.expandedElement === element ? null : element;
    // }
    this.citas = CITAS;
    this.cd.detectChanges();
  }
}

export interface User {
  name: string;
  email: string;
  phone: string;
  addresses?: Address[] | MatTableDataSource<Address>;
}

export interface Address {
  street: string;
  zipCode: string;
  city: string;
}

const USERS: Afiliado[] = [
  {id:1, nombre:'Afiliado1', edad:25, correo:'afiliado1@mail.com'},
  {id:2, nombre:'Afiliado2', edad:25, correo:'afiliado2@mail.com'},
  {id:3, nombre:'Afiliado3', edad:25, correo:'afiliado3@mail.com'},
  {id:11, nombre:'Afiliado3', edad:25, correo:'afiliado3@mail.com'},
  {id:23, nombre:'Afiliado3', edad:25, correo:'afiliado3@mail.com'},
];

const CITAS: Cita[] = [
  {id: 1, fecha: new Date('2023-05-18T00:00'), hora: "10:30", usuario: 1, test: 1},
  {id: 2, fecha: new Date('2023-01-01T00:00'), hora: "15:30", usuario: 1, test: 1},
  {id: 3, fecha: new Date('2023-12-31T00:00'), hora: "00:00", usuario: 1, test: 3},
];