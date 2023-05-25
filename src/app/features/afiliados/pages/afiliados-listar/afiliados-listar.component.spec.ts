import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliadosListarComponent } from './afiliados-listar.component';

describe('AfiliadosListarComponent', () => {
  let component: AfiliadosListarComponent;
  let fixture: ComponentFixture<AfiliadosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfiliadosListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfiliadosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
