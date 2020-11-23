import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareeilViewComponent } from './appareil-view.component';

describe('AppareeilViewComponent', () => {
  let component: AppareeilViewComponent;
  let fixture: ComponentFixture<AppareeilViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppareeilViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppareeilViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
