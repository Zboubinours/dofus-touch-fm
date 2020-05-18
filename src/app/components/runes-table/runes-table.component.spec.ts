import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunesTableComponent } from './runes-table.component';

describe('RunesTableComponent', () => {
  let component: RunesTableComponent;
  let fixture: ComponentFixture<RunesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
