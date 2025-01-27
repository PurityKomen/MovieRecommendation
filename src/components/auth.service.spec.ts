import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach( () => {
    TestBed.configureTestingModule({
      providers: [ AuthService],
    });
    service = TestBed.inject(AuthService);
  });

  it('should test registerUser', () => {
      spyOn(service, 'registerUser').and.callThrough();
      service.registerUser('a','b','c')
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
        service.firebaseAuth,
        'test@example.com',
        'password123'
      );
    });

  it('should test login', () => {
      spyOn(service, 'login').and.callThrough();
      service.login('a','b')
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        service.firebaseAuth,
        'test@example.com',
        'password123'
      );
    });

  it('should test logout', () => {
      spyOn(service, 'logout').and.callThrough();
      service.logout()
      expect(signOut ).toHaveBeenCalledWith( service.firebaseAuth);
    });

});
