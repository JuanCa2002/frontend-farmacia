import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioSalesComponent } from './inventario-sales.component';

describe('InventarioSalesComponent', () => {
  let component: InventarioSalesComponent;
  let fixture: ComponentFixture<InventarioSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventarioSalesComponent]
    });
    fixture = TestBed.createComponent(InventarioSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
