import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/core/models/cita.model';
import { HeaderService } from 'src/app/core/services/header.service';
import { TableActionColumn } from 'src/app/shared/models/TableActionColumn.model';
import { TableColumn } from 'src/app/shared/models/TableColumn.model';
import { CitaService } from '../../services/cita.service';
import { CitaMapperService } from '../../services/cita-mapper.service';
import { ConfirmationDialogService } from 'src/app/shared/services/confirmation-dialog.service';
import { EMPTY, concatMap } from 'rxjs';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-citas-listar',
  templateUrl: './citas-listar.component.html',
  styleUrls: ['./citas-listar.component.css']
})
export class CitasListarComponent implements OnInit{
  
  citas!: Cita[];
  columns!: TableColumn[];
  actionColumn!: TableActionColumn;
  
  constructor(private headerService: HeaderService, 
              private router: Router, 
              private serviceCita: CitaService,
              private citaMapper: CitaMapperService,
              private confirmDialog: ConfirmationDialogService,
              private notificationService: NotificationService,
  ){}
  
  ngOnInit(): void {
    
    this.headerService.setHeader('Citas');
    
    this.getCitas();
  
    this.columns = [
      {columnDef: 'id', header:'Id Cita', type: 'number'},
      {columnDef: 'fecha', header:'Fecha', type: 'date', dateFormat:'dd/MM/yyyy'},
      {columnDef: 'hora', header:'Hora', type: 'string'},
      {columnDef: 'test', header:'Id Test', type: 'number'},
      {columnDef: 'afiliado', header:'Id Afiliado', type: 'number'},
    ]
  
    this.actionColumn = {header:'Opciones', leftIcon: 'update', rightIcon:'delete_outlined'};
  }

  getCitas(): void{
    this.serviceCita.getCitas().subscribe(data => {
      this.citas = data.map(citaAPI => this.citaMapper.citaAPIToCita(citaAPI));
    });
  }
  
  updateCita($element: Cita): void{
    this.router.navigate(['citas/modificar', $element.id]);
  }
  
  deleteCita($element: Cita): void{
    
    let confirm = this.confirmDialog.confirmDialog({
      title: 'Confirmación de borrado',
      message: `Esta seguro de que sea eliminar la cita con Id: ${$element.id}?`,
      confirmText: 'Aceptar',
      cancelText: 'Cancelar',
    });

    confirm.pipe(concatMap(data => {
        if(data && $element.id){
            return this.serviceCita.deleteCita($element.id); 
        }
        return EMPTY;
      })).subscribe(data=> {
        this.getCitas();
        this.notificationService.openNotification("Cita elmininada correctamente", "Aceptar");
      });
  }
}