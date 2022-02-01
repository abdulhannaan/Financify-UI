import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingtableComponent } from './pricing-table.component';

describe('FooterComponent', () => {
  let component: PricingtableComponent;
  let fixture: ComponentFixture<PricingtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
