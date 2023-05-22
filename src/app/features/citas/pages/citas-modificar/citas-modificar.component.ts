import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cita } from 'src/app/core/models/cita.model';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-citas-modificar',
  templateUrl: './citas-modificar.component.html',
  styleUrls: ['./citas-modificar.component.css']
})
export class CitasModificarComponent implements OnInit, OnDestroy{

  private sub!: Subscription;
  private idCita?: number;
  protected cita!: Cita;

  constructor(private headerService: HeaderService, private route: ActivatedRoute){
    this.headerService.setHeader('Citas - Actualizar cita');
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.idCita = Number(params['id']);
       this.getCita(this.idCita);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getCita(id: number): void{
    this.cita = {fecha: new Date('2023-05-18T00:00'), hora: "10:30", usuario: 1, test: 2};
  }

}
