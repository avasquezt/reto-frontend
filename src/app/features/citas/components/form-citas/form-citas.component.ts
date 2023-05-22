import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cita } from 'src/app/core/models/cita.model';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'form-citas',
  templateUrl: './form-citas.component.html',
  styleUrls: ['./form-citas.component.css']
})
export class FormCitasComponent implements OnChanges {
  
  @Input() cita!: Cita;
  
  form!: FormGroup;
  
  // Restrictions
  minDate = new Date;

  constructor(private fb: FormBuilder,private router: Router,){
    this.form = this.fb.group({
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      usuario: ['', Validators.required],
      test: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cita']?.currentValue) {
      // Set the initial value of the form
       this.form.setValue(this.cita);
      // this.form.setValue({
      //   fecha: this.cita.fecha,
      //   hora: `${this.cita.hora.getHours()}:${this.cita.hora.getMinutes()}`,
      //   usuario: String(this.cita.usuario),
      //   test: String(this.cita.test),
      // });
      // Trigger input validations
      for (var i in this.form.controls) {
        this.form.controls[i].markAsTouched();
      }
      console.log(this.form);
    }
    
  }

  submit() {
    // this.submitted.emit(this.form.getRawValue());
    // this.form.reset();
    console.log(this.form);
    let time12h = this.form.value.hora;
    let [time, modifier] = time12h.split(" ");
 
    let [hours, minutes] = time.split(":");
  
    if (hours === "12") {
      hours = "00";
    }
  
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }
  
    console.log(`${hours}:${minutes}`);
    this.router.navigate(['citas']);
  }

  afiliados: number[] = [
    1,
    2,
    3,
    4,
    5,
  ];

  tests: number[] = [
    1,
    2,
    3,
    4,
    5,
  ];
              
}
