import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSupportComponent } from './landing-support.component';

describe('LandingSupportComponent', () => {
  let component: LandingSupportComponent;
  let fixture: ComponentFixture<LandingSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
