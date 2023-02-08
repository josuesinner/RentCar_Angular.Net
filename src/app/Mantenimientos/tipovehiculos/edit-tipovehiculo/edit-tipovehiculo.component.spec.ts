import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipovehiculoComponent } from './edit-tipovehiculo.component';

describe('EditTipovehiculoComponent', () => {
  let component: EditTipovehiculoComponent;
  let fixture: ComponentFixture<EditTipovehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTipovehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTipovehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
