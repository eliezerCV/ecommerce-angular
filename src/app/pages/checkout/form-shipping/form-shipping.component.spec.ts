import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormShippingComponent } from './form-shipping.component';

describe('FormShippingComponent', () => {
  let component: FormShippingComponent;
  let fixture: ComponentFixture<FormShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormShippingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
