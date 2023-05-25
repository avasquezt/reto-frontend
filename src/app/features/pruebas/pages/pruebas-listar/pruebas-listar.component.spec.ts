import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasListarComponent } from './pruebas-listar.component';

describe('PruebasListarComponent', () => {
  let component: PruebasListarComponent;
  let fixture: ComponentFixture<PruebasListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebasListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
