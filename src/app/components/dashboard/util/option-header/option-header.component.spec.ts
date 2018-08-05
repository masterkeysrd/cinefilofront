import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionHeaderComponent } from './option-header.component';

describe('OptionHeaderComponent', () => {
  let component: OptionHeaderComponent;
  let fixture: ComponentFixture<OptionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
