import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'submit-form-button-group',
  templateUrl: './submit-form-button-group.component.html',
  styleUrls: ['./submit-form-button-group.component.css']
})
export class SubmitFormButtonGroupComponent {
  @Input() cancelRedirectPath!: string;
  @Input() submitDisabled: boolean = false;

  constructor(private router: Router){}

  redirect(path: string): void{
    this.router.navigate([path]);
  }
}
