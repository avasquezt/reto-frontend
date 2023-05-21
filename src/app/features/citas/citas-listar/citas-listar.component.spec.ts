import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasListarComponent } from './citas-listar.component';

describe('CitasListarComponent', () => {
  let component: CitasListarComponent;
  let fixture: ComponentFixture<CitasListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
