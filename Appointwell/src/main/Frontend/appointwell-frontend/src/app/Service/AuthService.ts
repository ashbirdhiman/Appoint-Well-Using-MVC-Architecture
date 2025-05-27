import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSource = new BehaviorSubject<boolean>(!!sessionStorage.getItem('authToken'));
  private userRoleSource = new BehaviorSubject<string | null>(sessionStorage.getItem('userRole'));

  isLoggedIn$ = this.isLoggedInSource.asObservable();
  userRole$ = this.userRoleSource.asObservable();

  login(authToken: string, role: string) {
    sessionStorage.setItem('authToken', authToken);
    sessionStorage.setItem('userRole', role);
    this.isLoggedInSource.next(true);
    this.userRoleSource.next(role);
  }

  logout() {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userRole');
    this.isLoggedInSource.next(false);
    this.userRoleSource.next(null);
  }
}
