import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmbrellaUnemploymentComponent } from './umbrella-unemployment.component';

describe('UmbrellaUnemploymentComponent', () => {
  let component: UmbrellaUnemploymentComponent;
  let fixture: ComponentFixture<UmbrellaUnemploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmbrellaUnemploymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmbrellaUnemploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
