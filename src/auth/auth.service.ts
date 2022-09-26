import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signin() {
    return { msg: 'user is signed in' };
  }

  signup() {
    return { msg: 'user is signed up' };
  }
}
