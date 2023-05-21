import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-citas-listar',
  templateUrl: './citas-listar.component.html',
  styleUrls: ['./citas-listar.component.css']
})
export class CitasListarComponent implements OnInit {

  constructor(private headerService: HeaderService){}

  ngOnInit(): void {
    this.headerService.setHeader('Citas');
  }

  displayedColumns: string[] = ['id', 'fecha', 'hora', 'test', 'afiliado', 'expand'];
  dataSource = ELEMENT_DATA;


}

export interface PeriodicElement {
  id: number;
  fecha: string;
  hora: number;
  test: string;
  afiliado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, fecha: '2020-02-12', hora: 1.0079, test: 'H', afiliado: '2'},
  {id: 2, fecha: 'Helium', hora: 4.0026, test: 'He', afiliado: '2'},
  {id: 3, fecha: 'Lithium', hora: 6.941, test: 'Li', afiliado: '2'},
  {id: 4, fecha: 'Beryllium', hora: 9.0122, test: 'Be', afiliado: '2'},
  {id: 5, fecha: 'Boron', hora: 10.811, test: 'B', afiliado: '2'},
  {id: 6, fecha: 'Carbon', hora: 12.0107, test: 'C', afiliado: '2'},
  {id: 7, fecha: 'Nitrogen', hora: 14.0067, test: 'N', afiliado: '2'},
  {id: 8, fecha: 'Oxygen', hora: 15.9994, test: 'O', afiliado: '2'},
  {id: 9, fecha: 'Fluorine', hora: 18.9984, test: 'F', afiliado: '2'},
  {id: 10, fecha: 'Neon', hora: 20.1797, test: 'Ne', afiliado: '2'},
];