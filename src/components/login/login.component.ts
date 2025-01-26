import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  providers: [AuthService],
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    private router: Router, 
  ) {}

  loginForm!: FormGroup
  formError!: string

  //Register users
  loginUser(){
    const body = {
      email: this.loginForm?.value.email,
      password: this.loginForm?.value.password,
    }

    //Send login form data to auth service to login
    this.authService.login(body.email,body.password).then(()=> {
      this.loginForm.reset()
      this.router.navigate(['/movies']);
    })
    .catch((error) => {
      this.formError = error
    })
    
  }

  ngOnInit() {
    //Validate data from the form
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.required]],
        password: ['', [Validators.required]]
      },
  );
  }

}
