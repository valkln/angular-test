import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchParams = ''
  constructor(
    public auth: AuthService,
    private router: Router
  ) { }
  ngOnInit() {
  }
  logout(event: Event) {
    event.preventDefault()
    this.auth.logout()
  }
  search() {
    this.router.navigate(['/'], {
      queryParams: {
        search: this.searchParams
      }
    })
  }
}
