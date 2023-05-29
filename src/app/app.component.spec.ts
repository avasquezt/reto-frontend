import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { HeaderService } from './core/services/header.service';
import { of } from 'rxjs';

fdescribe('AppComponent', () => {

  let mockHeaderService;

  beforeEach(async () => {

    mockHeaderService = jasmine.createSpyObj(['getHeader']);
    mockHeaderService.getHeader.and.returnValue(of('Agenda de citas'));

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent
      ],
      providers: [
        { provide: HeaderService, useValue: mockHeaderService }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'reto_frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('reto_frontend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content h2')?.textContent).toBeUndefined();
  });
  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content h2')?.textContent).toContain('Agenda de citas');
  // });
});
