import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AuthService {
  signin() {
    Logger.log(`user is signed in`);
    return { msg: 'user is signed in' };
  }

  signup() {
    Logger.log(`user is signed up`);
    return { msg: 'user is signed up' };
  }
}
