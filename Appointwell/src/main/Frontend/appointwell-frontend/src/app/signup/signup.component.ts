import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ApiService} from "../Service/api-service";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {


  // @ts-ignore
  signupForm: FormGroup;

  constructor(private fb: FormBuilder,private apiService:ApiService) {
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('User Information:', this.signupForm.value);

      const { email, password, contact_number, name } = this.signupForm.value
      // Implement the signup logic here (e.g., call a service to create a new user) } else { console.log('Form is not valid'); } } // Getter for easier access to form controls in the template
      this.apiService.signUp(email,password,contact_number,name).subscribe(
        response=>console.log(response)
      )
    }
  }

  get f() {
    return this.signupForm.controls;
  }
}
