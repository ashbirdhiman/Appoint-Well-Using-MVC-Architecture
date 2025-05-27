import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from "@angular/forms";
import { NgClass, NgIf } from "@angular/common";
import { ApiService } from "../Service/api-service";
import { Router } from "@angular/router";
import { AuthService } from "../Service/AuthService";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = ''; // Property to hold error messages

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {

    this.errorMessage = ''; // Reset error message on each submit attempt
    if (this.loginForm.valid) {
      const { username, password, role } = this.loginForm.value;
      console.log(role);
      if (role === 'patient') {
        this.apiService.login(username, password, role).subscribe(
          (data: any) => {
            console.log('Login successful:', data);
            if (data.token) {
              sessionStorage.setItem('authToken', data.token);
              sessionStorage.setItem('userRole', role);
              this.authService.login(data.token, role);
              this.router.navigate(['/patient-dashboard']);
            }
          },
          (error) => {
            if (error.status === 500) {
              this.errorMessage = 'Bad credentials. Please try again.';
            }
          }
        );
      } else if (role === 'doctor') {
        this.apiService.doctorLogin(username, password, role).subscribe(
          (data: any) => {
            console.log('Login successful:', data);
            sessionStorage.setItem('userRole', role);
            this.authService.login(data.token, role);
            this.router.navigate(['/patient-dashboard']);
          },
          (error) => {
            if (error.status === 500) {
              this.errorMessage = 'Bad credentials. Please try again.';
            }
          }
        );
      } else if (role === 'admin') {
        this.apiService.adminLogin(username, password, role).subscribe(
          (data: any) => {
            console.log('Login successful:', data);
            sessionStorage.setItem('userRole', role);
            this.authService.login(data.token, role);
            this.router.navigate(['/admin-dashboard']);
          },
          (error) => {
            if (error.status === 500) {
              this.errorMessage = 'Bad credentials. Please try again.';
            }
          }
        );
      }
      else if (role === 'Hospital') {
        this.apiService.hospitalLogin(username, password, role).subscribe(
          (data: any) => {
            console.log('Login successful:', data);
            sessionStorage.setItem('userRole', role);
            this.authService.login(data.token, role);
            this.router.navigate(['/hospital-dashboard']);
          },
          (error) => {
            if (error.status === 500) {
              this.errorMessage = 'Bad credentials. Please try again.';
            }
          }
        );
      }
    }
  }
}
