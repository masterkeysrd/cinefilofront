import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSaveComponent } from './button-save.component';

describe('ButtonSaveComponent', () => {
  let component: ButtonSaveComponent;
  let fixture: ComponentFixture<ButtonSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
