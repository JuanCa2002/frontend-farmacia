import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMedicinaComponent } from './crear-medicina.component';

describe('CrearMedicinaComponent', () => {
  let component: CrearMedicinaComponent;
  let fixture: ComponentFixture<CrearMedicinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearMedicinaComponent]
    });
    fixture = TestBed.createComponent(CrearMedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
