import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractToastLevel, AbstractToastService } from '../../toast/abstract-toast.service';

@Component({
  selector: 'app-interceptor-example',
  templateUrl: './interceptor-example.component.html',
  styleUrls: ['./interceptor-example.component.scss']
})
export class InterceptorExampleComponent implements OnInit {

  constructor(private httpClient: HttpClient, private toastService: AbstractToastService) {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.httpClient.get('example').subscribe(
      () => this.toastService.emit({ level: AbstractToastLevel.Success, message: 'Request success' }),
      () => this.toastService.emit({ level: AbstractToastLevel.Error, message: 'Request failed' })
    );
  }
}
