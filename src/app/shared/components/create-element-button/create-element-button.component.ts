import { Component, Input } from '@angular/core';

@Component({
  selector: 'create-element-button',
  templateUrl: './create-element-button.component.html',
  styleUrls: ['./create-element-button.component.css']
})
export class CreateElementButtonComponent {

  @Input() buttonRedirectPath!: string[];
  
}
