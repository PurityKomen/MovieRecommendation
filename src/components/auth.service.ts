import { inject, Injectable, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signOut, updateProfile } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { user } from 'rxfire/auth';
import { UserInterface } from './movie';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  firebaseAuth = inject(Auth)
  user$ = user(this.firebaseAuth)
  currentUser = signal <UserInterface | null | undefined>(undefined)

  //register a new user
  registerUser(email:string, username:string, password:string){
    return createUserWithEmailAndPassword(this.firebaseAuth,email,password).then( response => {
      updateProfile(response.user, {displayName:username})
    })
  }

  //Login Users
  login(email:string, password:string){
    return signInWithEmailAndPassword(this.firebaseAuth,email,password).then(() => {})
  }

  //logout users
  logout(){
    return signOut(this.firebaseAuth)
  }
  
}
