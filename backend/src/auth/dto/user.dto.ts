import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IUser } from '../interfaces/user.interface';

export class UserResponseDto implements IUser {
  @ApiProperty({
    example: 'c7b09e8f-5800-4f8b-869f-bf1063a7520e',
    description: 'ID пользователя',
  })
  id: string;

  @ApiProperty({
    example: 'USER',
    description: 'Роль пользователя',
    enum: Role,
  })
  role: Role;

  @ApiProperty({
    example: 'user@example.com',
    description: 'Email пользователя',
  })
  email: string;

  @ApiProperty({ example: 'User', description: 'Имя пользователя' })
  username: string;
}
