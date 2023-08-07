import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioNedicinasComponent } from './inventario-nedicinas.component';

describe('InventarioNedicinasComponent', () => {
  let component: InventarioNedicinasComponent;
  let fixture: ComponentFixture<InventarioNedicinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventarioNedicinasComponent]
    });
    fixture = TestBed.createComponent(InventarioNedicinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
