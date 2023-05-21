import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { HeaderService } from './core/services/header.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked{
  title = 'reto_frontend';
  protected header?: Observable<string>;

  constructor(private headerService: HeaderService, private cdRef:ChangeDetectorRef){}

  ngAfterContentChecked(): void {
    this.header = this.headerService.getHeader();
    this.cdRef.detectChanges();
  }

}
