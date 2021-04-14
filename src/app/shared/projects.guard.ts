import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { projectsConfig } from '../configurations/projects.config';

@Injectable({ providedIn: 'root' })
export class ProjectsGuard implements CanActivate {
  projectsAvailable: boolean;
  constructor(private router: Router) {
    this.projectsAvailable = projectsConfig.showProjects;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    if (this.projectsAvailable) return this.projectsAvailable;
    else return this.router.createUrlTree(['/not-found']);
  }
}
