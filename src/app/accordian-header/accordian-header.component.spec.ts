import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianHeaderComponent } from './accordian-header.component';

describe('AccordianHeaderComponent', () => {
  let component: AccordianHeaderComponent;
  let fixture: ComponentFixture<AccordianHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordianHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordianHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
