import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLanguageComponent } from './list-language.component';

describe('ListLanguageComponent', () => {
  let component: ListLanguageComponent;
  let fixture: ComponentFixture<ListLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
