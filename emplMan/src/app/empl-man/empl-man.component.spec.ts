import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplManComponent } from './empl-man.component';

describe('EmplManComponent', () => {
  let component: EmplManComponent;
  let fixture: ComponentFixture<EmplManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
