import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateElementButtonComponent } from './create-element-button.component';

describe('CreateElementButtonComponent', () => {
  let component: CreateElementButtonComponent;
  let fixture: ComponentFixture<CreateElementButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateElementButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateElementButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
