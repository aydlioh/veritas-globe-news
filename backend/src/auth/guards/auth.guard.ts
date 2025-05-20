import { AuthGuard as JwtGuard } from '@nestjs/passport';

export class AuthGuard extends JwtGuard('jwt') {}
