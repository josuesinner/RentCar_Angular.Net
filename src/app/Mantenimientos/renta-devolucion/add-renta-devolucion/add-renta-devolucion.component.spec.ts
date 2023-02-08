import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentaDevolucionComponent } from './add-renta-devolucion.component';

describe('AddRentaDevolucionComponent', () => {
  let component: AddRentaDevolucionComponent;
  let fixture: ComponentFixture<AddRentaDevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRentaDevolucionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRentaDevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
