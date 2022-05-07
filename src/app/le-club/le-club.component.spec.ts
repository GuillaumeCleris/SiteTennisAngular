import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeClubComponent } from './le-club.component';

describe('LeClubComponent', () => {
  let component: LeClubComponent;
  let fixture: ComponentFixture<LeClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
