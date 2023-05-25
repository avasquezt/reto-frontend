import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasAgregarComponent } from './pruebas-agregar.component';

describe('PruebasAgregarComponent', () => {
  let component: PruebasAgregarComponent;
  let fixture: ComponentFixture<PruebasAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebasAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebasAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
