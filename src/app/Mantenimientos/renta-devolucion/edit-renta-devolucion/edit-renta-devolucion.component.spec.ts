import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRentaDevolucionComponent } from './edit-renta-devolucion.component';

describe('EditRentaDevolucionComponent', () => {
  let component: EditRentaDevolucionComponent;
  let fixture: ComponentFixture<EditRentaDevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRentaDevolucionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRentaDevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
