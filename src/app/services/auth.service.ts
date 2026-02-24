import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login(username: string, password: string): Observable<any> {
    
    if (username === 'admin' && password === '1234') {
      return of({ success: true });
    } else {
      return of({ success: false });
    }
  }
}