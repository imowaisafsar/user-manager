import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle
  message = '';

  form: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private readonly globalService: GlobalService,
    private readonly fb: FormBuilder,
    private readonly authservice: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.globalService.setTitle('Sign Up');
  }

  submitForm(): void {
    // console.log(this.form.value);
    this.register(this.form.value.email, this.form.value.password);
  }

  register(email: string, password: string): void {
    this.clearErrorMessage();
    if (this.validateForm(email, password)) {
      this.authservice.registerWithEmail(email, password)
        .then((res) => {
          this.message = `You have successfully registered with ${email}`;
        }).catch(_error => {
          this.error = _error;
          this.router.navigate(['/signup']);
        })
    }
  }

  validateForm(email: string, password: string) {
    if (email.length === 0) {
      this.errorMessage = "please enter email id";
      return false;
    }
    if (password.length === 0) {
      this.errorMessage = "please enter password";
      return false;
    }
    if (password.length < 6) {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }
    this.errorMessage = '';
    return true;
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

}
