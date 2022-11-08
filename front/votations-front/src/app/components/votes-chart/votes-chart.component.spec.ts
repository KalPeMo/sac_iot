import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesChartComponent } from './votes-chart.component';

describe('VotesChartComponent', () => {
  let component: VotesChartComponent;
  let fixture: ComponentFixture<VotesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotesChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
