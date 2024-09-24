import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedRouteExampleComponent } from './protected-route-example.component';

describe('ProtectedRouteExampleComponent', () => {
  let component: ProtectedRouteExampleComponent;
  let fixture: ComponentFixture<ProtectedRouteExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectedRouteExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectedRouteExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
