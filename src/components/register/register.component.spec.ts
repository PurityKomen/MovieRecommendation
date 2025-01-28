import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { AuthService } from '../auth.service';
import { Auth } from '@angular/fire/auth';

const authStub: any = {
  authState: {},
  auth: {
    signInWithEmailAndPassword() {
      return Promise.resolve();
    },
    createUserWithEmailAndPassword() {
      return Promise.resolve();
    }
  }
};

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
      providers: [AuthService,
        { provide: Auth, useValue: authStub },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should test registerUser', () => {
    spyOn(component, 'registerUser').and.callThrough();
    component.registerUser();
    expect(component.registerUser).toHaveBeenCalled();
  });
});
