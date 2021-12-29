import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProfessorGuardService implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    // let isAutenticado = localStorage.getItem('autenticado');

    // return isAutenticado === 'true' ? true : false;
    return this.authService.isAutenticado();
  }
}
