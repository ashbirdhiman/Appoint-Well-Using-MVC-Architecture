import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {AuthService} from "../Service/AuthService";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgSwitch,
    NgIf,
    RouterLink,
    NgSwitchCase
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit{
    isLoggedIn = false;
  userRole: string | null = '';

  constructor(private router: Router,private authService:AuthService  ) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });

    this.authService.userRole$.subscribe(role => {
      this.userRole = role;
    });
  }

  checkLoginStatus(): boolean {
    // Replace this with actual login status check logic
    return !!sessionStorage.getItem('authToken');
  }

  getUserRole(): string | null {
    // Replace this with actual role fetching logic
    return sessionStorage.getItem('userRole');
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToSignup(): void {
    this.router.navigate(['/signup']);
  }

  logout(): void {
    // Implement logout logic
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('userRole');
    this.isLoggedIn = false;
    this.userRole = '';
    this.router.navigate(['/']).then(r => false);
  }

  startTextToSpeech(): void {
    sessionStorage.setItem("text-to-speech", "true");
  }
}
