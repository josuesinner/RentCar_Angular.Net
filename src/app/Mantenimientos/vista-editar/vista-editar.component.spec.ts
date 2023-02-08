import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEditarComponent } from './vista-editar.component';

describe('VistaEditarComponent', () => {
  let component: VistaEditarComponent;
  let fixture: ComponentFixture<VistaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
