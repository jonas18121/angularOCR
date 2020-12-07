import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppareilComponent } from './add-appareil.component';

describe('AddAppareilComponent', () => {
  let component: AddAppareilComponent;
  let fixture: ComponentFixture<AddAppareilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppareilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
