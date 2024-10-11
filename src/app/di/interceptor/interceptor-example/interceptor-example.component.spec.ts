import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {InterceptorExampleComponent} from './interceptor-example.component';
import {AbstractToastService} from "../../toast/abstract-toast.service";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

const mockBook = {
  title: 'book title'
}
fdescribe('InterceptorExampleComponent', () => {
  let component: InterceptorExampleComponent;
  let fixture: ComponentFixture<InterceptorExampleComponent>;
  let abstractToastServiceSpy: jasmine.SpyObj<AbstractToastService>;

  beforeEach(async () => {
    abstractToastServiceSpy = jasmine.createSpyObj('AbstractToastService', ['emit'])
    let httpClientSpy = jasmine.createSpyObj('HttpClient', {
      get: of(mockBook)
    })
    await TestBed.configureTestingModule({
      declarations: [InterceptorExampleComponent],
      providers: [
        {
          provide: AbstractToastService,
          useValue: abstractToastServiceSpy
        },
        {
          provide: HttpClient,
          useValue: httpClientSpy
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InterceptorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the error toast', fakeAsync(() => {
    component.onClick();
    tick(500);
    expect(abstractToastServiceSpy.emit).toHaveBeenCalled()
  }))
});
