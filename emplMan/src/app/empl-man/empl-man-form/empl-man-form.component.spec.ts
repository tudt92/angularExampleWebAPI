import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplManFormComponent } from './empl-man-form.component';

describe('EmplManFormComponent', () => {
  let component: EmplManFormComponent;
  let fixture: ComponentFixture<EmplManFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplManFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplManFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
