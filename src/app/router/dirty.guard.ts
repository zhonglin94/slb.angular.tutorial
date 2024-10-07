import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateExampleComponent } from './can-deactivate-example/can-deactivate-example.component';

@Injectable({
  providedIn: 'root'
})
export class DirtyGuard implements CanDeactivate<CanDeactivateExampleComponent> {
  canDeactivate(
    component: CanDeactivateExampleComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // TODO: add logic the show the confirm dialog
    return true;
  }
}
