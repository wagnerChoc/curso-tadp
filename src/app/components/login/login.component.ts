import { Component, OnInit } from '@angular/core';
import{ AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login('admin', '1234')
      .subscribe(res => console.log(res));
  }

}
