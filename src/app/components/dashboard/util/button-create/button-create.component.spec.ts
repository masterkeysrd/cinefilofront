import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCreateComponent } from './button-create.component';

describe('ButtonCreateComponent', () => {
  let component: ButtonCreateComponent;
  let fixture: ComponentFixture<ButtonCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
