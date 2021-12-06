import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup
  isSubmitting = false
  constructor(
    private router: Router,
    private auth: AuthService
  ) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  submit() {
    if (this.form.invalid) return
    this.isSubmitting = true
    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    }
    this.auth.login(user).subscribe({
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
