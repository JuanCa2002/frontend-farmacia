import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioLaboratoriosComponent } from './inventario-laboratorios.component';

describe('InventarioLaboratoriosComponent', () => {
  let component: InventarioLaboratoriosComponent;
  let fixture: ComponentFixture<InventarioLaboratoriosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventarioLaboratoriosComponent]
    });
    fixture = TestBed.createComponent(InventarioLaboratoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
