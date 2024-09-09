import { Component, Inject, InjectionToken, Input, OnInit, Optional } from '@angular/core';

export interface GlobalColorButtonConfig {
  color: string;
}

export const GLOBAL_COLOR_BUTTON_CONFIG = new InjectionToken<GlobalColorButtonConfig>('Global color button config');

@Component({
  selector: 'app-color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.scss']
})
export class ColorButtonComponent implements OnInit {
  @Input() color: string | undefined;

  constructor(@Optional() @Inject(GLOBAL_COLOR_BUTTON_CONFIG) private config?: GlobalColorButtonConfig) {

  }

  ngOnInit(): void {
    if (this.config?.color && !this.color) {
      this.color = this.config.color;
    }
  }
}
