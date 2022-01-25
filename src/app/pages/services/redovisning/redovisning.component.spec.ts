import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedovisningComponent } from './redovisning.component';

describe('RedovisningComponent', () => {
  let component: RedovisningComponent;
  let fixture: ComponentFixture<RedovisningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedovisningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedovisningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
