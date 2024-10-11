import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ThemeService} from "../../../theme.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.scss']
})
export class ColorButtonComponent implements OnInit, OnDestroy {
  @Input() color: string | undefined;
  private sub!: Subscription;

  constructor(private themeService: ThemeService) {
    // TODO using DI to add global config to change the color of the color button component.
  }

  ngOnInit(): void {
    this.sub = this.themeService.theme$().subscribe(theme => {
      this.color = theme === 'light' ? 'white' : 'black';
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
