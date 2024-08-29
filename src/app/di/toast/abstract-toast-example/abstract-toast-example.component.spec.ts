import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractToastExampleComponent } from './abstract-toast-example.component';

describe('AbstractToastExampleComponent', () => {
  let component: AbstractToastExampleComponent;
  let fixture: ComponentFixture<AbstractToastExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbstractToastExampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AbstractToastExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
