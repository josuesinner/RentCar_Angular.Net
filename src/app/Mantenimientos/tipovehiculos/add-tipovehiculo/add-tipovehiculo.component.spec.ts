import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipovehiculoComponent } from './add-tipovehiculo.component';

describe('AddTipovehiculoComponent', () => {
  let component: AddTipovehiculoComponent;
  let fixture: ComponentFixture<AddTipovehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipovehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTipovehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
