import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  login() {
    // Khi người dùng đăng nhập, cập nhật trạng thái đăng nhập thành true
    this.isLoggedInSubject.next(true);
  }

  logout() {
    // Khi người dùng đăng xuất, cập nhật trạng thái đăng nhập thành false
    this.isLoggedInSubject.next(false);
  }
}
