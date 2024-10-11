import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterDemoComponent } from './router-demo.component';

describe('RouterDemoComponent', () => {
  let component: RouterDemoComponent;
  let fixture: ComponentFixture<RouterDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
