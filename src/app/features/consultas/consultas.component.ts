import { animate, state, style, transition, trigger } from '@angular/animations';

import { ChangeDetectorRef, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Afiliado } from 'src/app/core/models/afiliado.model';
import { Cita } from 'src/app/core/models/cita.model';
import { HeaderService } from 'src/app/core/services/header.service';
import { TableColumn } from 'src/app/shared/models/TableColumn.model';
import { AfiliadoService } from '../afiliados/services/afiliado.service';
import { PruebaService } from '../pruebas/services/prueba.service';
import { CitaService } from '../citas/services/cita.service';
import { CitaMapperService } from '../citas/services/cita-mapper.service';
import { AfiliadoMapperService } from '../afiliados/services/afiliado-mapper.service';
import { PruebaMapperService } from '../pruebas/services/prueba-mapper.service';
import { forkJoin } from 'rxjs';
import { Moment } from 'moment';
import { Prueba } from 'src/app/core/models/prueba.model';

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

  constructor(
    private headerService: HeaderService, 
    private cd: ChangeDetectorRef,
    private afiliadoService: AfiliadoService,
    private pruebaService: PruebaService,
    private citaService: CitaService,
    private citaMapper: CitaMapperService,
    private afiliadoMapper: AfiliadoMapperService,
    private pruebaMapper: PruebaMapperService,
    ){
      this.headerService.setHeader('Consultas');
  }
  
  // Outer table data
  dataSource!: MatTableDataSource<Afiliado>;
  afiliados: Afiliado[] = [];
  columns!: TableColumn[];
  columnsToDisplay! : string[];
  expandedElement!: Afiliado | null;


  // Inner table data
  citas: Cita[] = [];
  displayedCitas: any[] = [];
  innerTableColumns!: TableColumn[];

  // Filter values
  IdAfiliadoFilter: number | undefined;
  fechaFilter: Moment | undefined;

  ngOnInit() {

    this.displayedCitas = [];

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
      {columnDef: 'test', header:'Nombre de prueba', type: 'string'}
    ]

    this.columnsToDisplay = ['expandIconColumn'].concat(this.columns.map(e => e.columnDef));
  }

  applyFilter(): void{
    let idAfiliados: number[] = [];
    
    this.citaService.getCitas(this.IdAfiliadoFilter, this.fechaFilter?.format('DD/MM/YYYY'))
        .subscribe(
          data => {
            if(data){
              // Obtain the appointments
              this.citas = data.map(cita => this.citaMapper.citaAPIToCita(cita));
              
              // Obtain the affiliate ids
              idAfiliados = data.map(e => e.idAffiliate);
              idAfiliados = [...(new Set(idAfiliados))];
            }

              // Load the affiliates to the outer table
              this.getAfiliados(idAfiliados);

        });
  }

  toggleRow(element: Afiliado) {
    
    // Filter dates by chosen affiliate
    let citas = this.citas.filter(cita => cita.afiliado === element.id && cita.id != null);

    // Obtain the test ids
    let testIds = citas.map(cita => cita.test);

    // Make the tests ids unique
    testIds = [...(new Set(testIds))];
    
    // Generate the observables to query the tests API and obtain the names
    let observables = testIds.map(id => this.pruebaService.getPruebaById(id));
    
    // Array to save the tests reponse
    let tests: Prueba[] = [];

    forkJoin(observables).subscribe(data => {
        tests = data.map(this.pruebaMapper.pruebaAPIToPrueba);
      }, null,
      () => {
        // Show the appointmenst of the current user, adding the name of the tests
        this.displayedCitas = citas.map(cita => ({...cita, test: tests.find(t => t.id == cita.test)?.nombre}));
      });
    // this.cd.detectChanges();
  }

  getAfiliados(idAfiliados: number[]): void{

    this.afiliados = [];

    let observables = idAfiliados.map(id => this.afiliadoService.getAfiliadoById(id));

    forkJoin(observables)
      .subscribe(data => {
          this.afiliados = data.map(this.afiliadoMapper.afiliadoAPIToAfiliado);
        },
        null,
        () => {
          this.dataSource = new MatTableDataSource(this.afiliados);
        });
    
  }
}