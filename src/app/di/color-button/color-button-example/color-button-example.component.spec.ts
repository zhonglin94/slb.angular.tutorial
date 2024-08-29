import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorButtonExampleComponent } from './color-button-example.component';

describe('ColorButtonExampleComponent', () => {
  let component: ColorButtonExampleComponent;
  let fixture: ComponentFixture<ColorButtonExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorButtonExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorButtonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
