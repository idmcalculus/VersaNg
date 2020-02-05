import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersaOffersComponent } from './versa-offers.component';

describe('VersaOffersComponent', () => {
  let component: VersaOffersComponent;
  let fixture: ComponentFixture<VersaOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersaOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersaOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
