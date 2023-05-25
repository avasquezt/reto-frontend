import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cita } from 'src/app/core/models/cita.model';
import { AfiliadoService } from 'src/app/features/afiliados/services/afiliado.service';
import { PruebaService } from 'src/app/features/pruebas/services/prueba.service';

@Component({
  selector: 'form-citas',
  templateUrl: './form-citas.component.html',
  styleUrls: ['./form-citas.component.css']
})
export class FormCitasComponent implements OnChanges, OnInit {
  
  @Output() submitForm: EventEmitter<Cita> = new EventEmitter<Cita>();
  @Input() cita!: Cita;
  
  form!: FormGroup;
  
  // Selector variables
  afiliados: number[] = [];
  pruebas: number[] = [];
  
  // Restrictions
  minDate = new Date;

  constructor(
    private fb: FormBuilder,
    private serviceAfiliado: AfiliadoService,
    private servicePrueba: PruebaService,
    ){
      this.form = this.fb.group({
        fecha: ['', Validators.required],
        hora: ['', Validators.required],
        afiliado: ['', Validators.required],
        test: ['', Validators.required],
      });
  }

  ngOnInit(): void {
      
    // Load values for AfiliadoId selector
    this.serviceAfiliado.getAfiliados().subscribe(data => {
      this.afiliados = data.map(afiliadoAPI => Number(afiliadoAPI.id));
    });

    // Load values for PruebaId selector
    this.servicePrueba.getPruebas().subscribe(data => {
      this.pruebas = data.map(pruebaAPI => Number(pruebaAPI.id));
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cita']?.currentValue) {
      // Set the initial value of the form without id
      delete this.cita.id;
      this.form.setValue(this.cita);
      // Trigger input validations
      for (var i in this.form.controls) {
        this.form.controls[i].markAsTouched();
      }
    }
    
  }

  submit() {
    this.submitForm.emit(this.form.value);
  }
              
}
