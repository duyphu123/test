import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Lắng nghe trạng thái đăng nhập từ AuthService
    this.authService.isLoggedIn$.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }

  login() {
    // Gọi phương thức login của AuthService để đăng nhập
    this.authService.login();
  }

  logout() {
    // Gọi phương thức logout của AuthService để đăng xuất
    this.authService.logout();
  }
}
