import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanDeactivateExampleComponent } from './can-deactivate-example.component';

describe('CanDeactivateExampleComponent', () => {
  let component: CanDeactivateExampleComponent;
  let fixture: ComponentFixture<CanDeactivateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanDeactivateExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanDeactivateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
