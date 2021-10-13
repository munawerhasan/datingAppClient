import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cd1Component } from './cd1.component';

describe('Cd1Component', () => {
  let component: Cd1Component;
  let fixture: ComponentFixture<Cd1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cd1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
