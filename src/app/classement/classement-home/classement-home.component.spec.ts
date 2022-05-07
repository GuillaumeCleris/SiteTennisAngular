import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementHomeComponent } from './classement-home.component';

describe('ClassementHomeComponent', () => {
  let component: ClassementHomeComponent;
  let fixture: ComponentFixture<ClassementHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassementHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
