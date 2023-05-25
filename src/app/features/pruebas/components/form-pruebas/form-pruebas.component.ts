import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prueba } from 'src/app/core/models/prueba.model';

@Component({
  selector: 'form-pruebas',
  templateUrl: './form-pruebas.component.html',
  styleUrls: ['./form-pruebas.component.css']
})
export class FormPruebasComponent implements OnChanges{

  @Output() submitForm: EventEmitter<Prueba> = new EventEmitter<Prueba>();

  @Input() prueba!: Prueba;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder
    ){
      this.form = this.fb.group({
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required],
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['prueba']?.currentValue) {
      this.form.setValue(this.prueba);
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
