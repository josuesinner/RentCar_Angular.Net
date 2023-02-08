import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCombustibleComponent } from './add-combustible.component';

describe('AddCombustibleComponent', () => {
  let component: AddCombustibleComponent;
  let fixture: ComponentFixture<AddCombustibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCombustibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCombustibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
