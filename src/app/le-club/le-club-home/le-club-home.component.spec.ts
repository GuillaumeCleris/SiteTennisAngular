import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeClubHomeComponent } from './le-club-home.component';

describe('LeClubHomeComponent', () => {
  let component: LeClubHomeComponent;
  let fixture: ComponentFixture<LeClubHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeClubHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeClubHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
