import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEraseComponent } from './button-erase.component';

describe('ButtonEraseComponent', () => {
  let component: ButtonEraseComponent;
  let fixture: ComponentFixture<ButtonEraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonEraseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonEraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
