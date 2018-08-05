import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShowComponent } from './list-show.component';

describe('ListShowComponent', () => {
  let component: ListShowComponent;
  let fixture: ComponentFixture<ListShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
