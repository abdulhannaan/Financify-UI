import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LonHRComponent } from './lon-hr.component';

describe('LonHRComponent', () => {
  let component: LonHRComponent;
  let fixture: ComponentFixture<LonHRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LonHRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LonHRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
