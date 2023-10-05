import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompararplacasComponent } from './compararplacas.component';

describe('CompararplacasComponent', () => {
  let component: CompararplacasComponent;
  let fixture: ComponentFixture<CompararplacasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompararplacasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompararplacasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
