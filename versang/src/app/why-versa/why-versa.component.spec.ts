import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyVersaComponent } from './why-versa.component';

describe('WhyVersaComponent', () => {
  let component: WhyVersaComponent;
  let fixture: ComponentFixture<WhyVersaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyVersaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyVersaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
