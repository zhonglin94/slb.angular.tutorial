import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProtectedRouteExampleComponent } from './protected-route-example/protected-route-example.component';

@Injectable({
  providedIn: 'root'
})
export class DirtyGuard implements CanDeactivate<ProtectedRouteExampleComponent> {
  canDeactivate(
    component: ProtectedRouteExampleComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.isDirty()) {
      return window.confirm('The component is dirty. Discard changes?');
    } else {
      return true;
    }
  }
}
