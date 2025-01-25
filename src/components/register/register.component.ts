import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

   constructor(
       public fb: FormBuilder,
       public authService: AuthService,
       private router: Router, 
      ) {}

    registerForm!: FormGroup
    formError!: string

  //Register users
  registerUser(){
    const body = {
      email: this.registerForm?.value.email,
      username: this.registerForm?.value.username,
      password: this.registerForm?.value.password,
    }

    //Send register form data to auth service
    this.authService.registerUser(body.email,body.username,body.password).then(()=> {
      this.registerForm.reset()
      this.router.navigate(['/movies']);
    })
    .catch((error) => {
      this.formError = error
    })
    
  }

  ngOnInit() {
    //Validate data from the form
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]]
      },
  );
  }
}
