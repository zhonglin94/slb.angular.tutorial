import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorExampleComponent } from './interceptor-example.component';

describe('InterceptorExampleComponent', () => {
  let component: InterceptorExampleComponent;
  let fixture: ComponentFixture<InterceptorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterceptorExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterceptorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
