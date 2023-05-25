import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasModificarComponent } from './pruebas-modificar.component';

describe('PruebasModificarComponent', () => {
  let component: PruebasModificarComponent;
  let fixture: ComponentFixture<PruebasModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebasModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebasModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
