import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorfilsComponent } from './colorfils.component';

describe('ColorfilsComponent', () => {
  let component: ColorfilsComponent;
  let fixture: ComponentFixture<ColorfilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorfilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
