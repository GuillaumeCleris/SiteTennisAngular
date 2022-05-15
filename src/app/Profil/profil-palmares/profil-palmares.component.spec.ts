import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPalmaresComponent } from './profil-palmares.component';

describe('ProfilPalmaresComponent', () => {
  let component: ProfilPalmaresComponent;
  let fixture: ComponentFixture<ProfilPalmaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilPalmaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPalmaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
