import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [UserService],
  controllers: [AuthController],
  providers: [AuthService, UserService]
})
export class AuthModule {}
