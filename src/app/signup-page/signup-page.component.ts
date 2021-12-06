import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../shared/services/auth.service';
import { matchValidator } from './../shared/pass-validator';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  form: FormGroup
  isSubmitting = false
  constructor(
    private router: Router,
    private auth: AuthService
  ) { }
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), matchValidator('confirmPassword', true)]),
      repassword: new FormControl('', [Validators.required, matchValidator('password')]),
    })
  }
  submit() {
    if (this.form.invalid) return
    this.isSubmitting = true
    const user = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    }
    this.auth.signup(user).subscribe({
      next: () => {
        this.form.reset
        this.router.navigate(['/'])
        this.isSubmitting = false
      },
      error: (err) => {
        console.log(err)
        this.isSubmitting = false
      }
    })
  }
}
