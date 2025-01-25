import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  firebaseAuth = inject(Auth)

  //register a new user
  registerUser(email:string, username:string, password:string){
    return createUserWithEmailAndPassword(this.firebaseAuth,email,password).then( response => {
      updateProfile(response.user, {displayName:username})
    })
  }

  
}
