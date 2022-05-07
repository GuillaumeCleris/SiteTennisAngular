import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournoisHomeComponent } from './tournois-home.component';

describe('TournoisHomeComponent', () => {
  let component: TournoisHomeComponent;
  let fixture: ComponentFixture<TournoisHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournoisHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournoisHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
