import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn = this.userService.isLoggedInUser()

  constructor(private userService: UserService) { }

  checkLoggedIn(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._isLoggedIn);
      }, 200);
    })
  }
}
