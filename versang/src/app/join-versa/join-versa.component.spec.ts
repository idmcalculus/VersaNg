import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinVersaComponent } from './join-versa.component';

describe('JoinVersaComponent', () => {
  let component: JoinVersaComponent;
  let fixture: ComponentFixture<JoinVersaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinVersaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinVersaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
