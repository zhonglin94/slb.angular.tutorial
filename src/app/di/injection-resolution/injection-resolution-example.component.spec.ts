import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionResolutionExampleComponent } from './injection-resolution-example.component';

describe('InjectionResolutionExampleComponent', () => {
  let component: InjectionResolutionExampleComponent;
  let fixture: ComponentFixture<InjectionResolutionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectionResolutionExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectionResolutionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
