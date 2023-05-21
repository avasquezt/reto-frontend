import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cita } from 'src/app/core/models/cita.model';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-citas-agregar',
  templateUrl: './citas-agregar.component.html',
  styleUrls: ['./citas-agregar.component.css']
})
export class CitasAgregarComponent {

  constructor(private headerService: HeaderService){
    this.headerService.setHeader('Citas - Nueva cita');
  }

  cita: Cita = {usuario: 1, test: 2, fecha: new Date("2023-10-10T00:00"), hora: new Date(new Date().setHours(10,20))};

}