import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbavComponent } from './navbav.component';

describe('NavbavComponent', () => {
  let component: NavbavComponent;
  let fixture: ComponentFixture<NavbavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
