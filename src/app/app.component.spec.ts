import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from '../components/auth.service';

describe('AppComponent', () => {
  let component: AppComponent; 
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent,RouterTestingModule],
      providers: [AuthService],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should test ngOnInIt', () => {
    component.ngOnInit()
    expect(component.ngOnInit).toHaveBeenCalled();
  });
});
