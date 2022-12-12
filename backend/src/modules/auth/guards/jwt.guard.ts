import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
// import { AuthService } from '../auth.service';
import { ExtractJwt, Strategy } from 'passport-jwt';

export const jwtConstants = {
  secret: 'test',
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { userName: payload.userName };
  }
}

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
