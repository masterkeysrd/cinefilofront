import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardIndexComponent } from './billboard-index.component';

describe('BillboardIndexComponent', () => {
  let component: BillboardIndexComponent;
  let fixture: ComponentFixture<BillboardIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillboardIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
