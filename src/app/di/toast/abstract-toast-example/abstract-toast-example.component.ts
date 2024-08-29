import { Component, OnInit } from '@angular/core';
import { AbstractToastLevel, AbstractToastService } from '../abstract-toast.service';

@Component({
  selector: 'app-abstract-toast-example',
  templateUrl: './abstract-toast-example.component.html',
  styleUrls: ['./abstract-toast-example.component.scss']
})
export class AbstractToastExampleComponent implements OnInit {

  constructor(private toastService: AbstractToastService) {
  }

  ngOnInit(): void {
  }

  onShowToast(): void {
    this.toastService.emit({
      level: AbstractToastLevel.Info,
      message: 'Abstract toast message example'
    });
  }
}
