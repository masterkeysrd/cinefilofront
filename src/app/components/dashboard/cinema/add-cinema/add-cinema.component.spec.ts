import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCinemaComponent } from './add-cinema.component';

describe('AddCinemaComponent', () => {
  let component: AddCinemaComponent;
  let fixture: ComponentFixture<AddCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
