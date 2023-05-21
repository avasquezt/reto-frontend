import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFormButtonGroupComponent } from './submit-form-button-group.component';

describe('SubmitFormButtonGroupComponent', () => {
  let component: SubmitFormButtonGroupComponent;
  let fixture: ComponentFixture<SubmitFormButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitFormButtonGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitFormButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
