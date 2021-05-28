import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaSingolaFatturaComponent } from './modifica-singola-fattura.component';

describe('ModificaSingolaFatturaComponent', () => {
  let component: ModificaSingolaFatturaComponent;
  let fixture: ComponentFixture<ModificaSingolaFatturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaSingolaFatturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaSingolaFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
