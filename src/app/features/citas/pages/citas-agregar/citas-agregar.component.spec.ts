import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasAgregarComponent } from './citas-agregar.component';

describe('CitasAgregarComponent', () => {
  let component: CitasAgregarComponent;
  let fixture: ComponentFixture<CitasAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
