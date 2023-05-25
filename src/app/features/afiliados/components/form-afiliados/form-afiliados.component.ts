import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Afiliado } from 'src/app/core/models/afiliado.model';

@Component({
  selector: 'form-afiliados',
  templateUrl: './form-afiliados.component.html',
  styleUrls: ['./form-afiliados.component.css']
})
export class FormAfiliadosComponent implements OnChanges{

  @Output() submitForm: EventEmitter<Afiliado> = new EventEmitter<Afiliado>();

  @Input() afiliado!: Afiliado;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder
    ){
      this.form = this.fb.group({
        nombre: ['', Validators.required],
        correo: ['', Validators.required,],
        edad: ['', Validators.required],
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['afiliado']?.currentValue) {
      this.form.setValue(this.afiliado);
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
