import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputImageComponent } from './form-input-image.component';

describe('FormInputImageComponent', () => {
  let component: FormInputImageComponent;
  let fixture: ComponentFixture<FormInputImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
