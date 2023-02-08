import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCombustibleComponent } from './edit-combustible.component';

describe('EditCombustibleComponent', () => {
  let component: EditCombustibleComponent;
  let fixture: ComponentFixture<EditCombustibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCombustibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCombustibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
