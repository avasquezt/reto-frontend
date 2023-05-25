import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliadosAgregarComponent } from './afiliados-agregar.component';

describe('AfiliadosAgregarComponent', () => {
  let component: AfiliadosAgregarComponent;
  let fixture: ComponentFixture<AfiliadosAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfiliadosAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfiliadosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
