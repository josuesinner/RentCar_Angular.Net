import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInspeccionComponent } from './edit-inspeccion.component';

describe('EditInspeccionComponent', () => {
  let component: EditInspeccionComponent;
  let fixture: ComponentFixture<EditInspeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInspeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
