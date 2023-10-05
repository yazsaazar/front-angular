import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacasReportesComponent } from './placas-reportes.component';

describe('PlacasReportesComponent', () => {
  let component: PlacasReportesComponent;
  let fixture: ComponentFixture<PlacasReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacasReportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacasReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
