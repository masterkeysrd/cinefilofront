import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCinemaComponent } from './edit-cinema.component';

describe('EditCinemaComponent', () => {
  let component: EditCinemaComponent;
  let fixture: ComponentFixture<EditCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
