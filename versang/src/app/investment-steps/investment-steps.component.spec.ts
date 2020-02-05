import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentStepsComponent } from './investment-steps.component';

describe('InvestmentStepsComponent', () => {
  let component: InvestmentStepsComponent;
  let fixture: ComponentFixture<InvestmentStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
