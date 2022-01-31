import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTextAreaComponent } from './services-text-area.component';

describe('ServicesTextAreaComponent', () => {
  let component: ServicesTextAreaComponent;
  let fixture: ComponentFixture<ServicesTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesTextAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
