import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrottleExampleComponent } from './throttle-example.component';

describe('ThrottleExampleComponent', () => {
  let component: ThrottleExampleComponent;
  let fixture: ComponentFixture<ThrottleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThrottleExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThrottleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
