import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTailComponent } from './movie-tail.component';

describe('MovieTailComponent', () => {
  let component: MovieTailComponent;
  let fixture: ComponentFixture<MovieTailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
