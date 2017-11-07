import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRequestComponent } from './landing-request.component';

describe('LandingRequestComponent', () => {
  let component: LandingRequestComponent;
  let fixture: ComponentFixture<LandingRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
