import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipovehiculosComponent } from './tipovehiculos.component';

describe('TipovehiculosComponent', () => {
  let component: TipovehiculosComponent;
  let fixture: ComponentFixture<TipovehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipovehiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipovehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
