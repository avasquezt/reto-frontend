import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasModificarComponent } from './citas-modificar.component';

describe('CitasModificarComponent', () => {
  let component: CitasModificarComponent;
  let fixture: ComponentFixture<CitasModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
