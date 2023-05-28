import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
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
        nombre: ['', [Validators.required, Validators.minLength(5)]],
        correo: ['', [Validators.required, Validators.email]],
        edad: ['', [Validators.required, Validators.min(0), Validators.max(99)]],
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