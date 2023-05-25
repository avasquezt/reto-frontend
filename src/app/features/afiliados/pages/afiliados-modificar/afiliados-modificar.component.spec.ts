import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliadosModificarComponent } from './afiliados-modificar.component';

describe('AfiliadosModificarComponent', () => {
  let component: AfiliadosModificarComponent;
  let fixture: ComponentFixture<AfiliadosModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfiliadosModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfiliadosModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
