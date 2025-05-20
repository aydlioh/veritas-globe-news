import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'aydlioh', description: 'Имя пользователя' })
  @IsString({ message: 'Имя должно быть строкой' })
  @IsNotEmpty({ message: 'Имя обязательно для заполнения' })
  @MaxLength(50, { message: 'Имя не должно превышать 50 символов' })
  username: string;

  @ApiProperty({
    example: 'aydlioh@example.com',
    description: 'Email пользователя',
  })
  @IsNotEmpty({ message: 'Email обязателен для заполнения' })
  @IsString({ message: 'Email должен быть строкой' })
  @IsEmail({}, { message: 'Некорректный email' })
  email: string;

  @ApiProperty({
    example: '123456',
    description: 'Пароль пользователя',
    minLength: 6,
    maxLength: 128,
  })
  @IsNotEmpty({ message: 'Пароль обязателен для заполнения' })
  @IsString({ message: 'Пароль должен быть строкой' })
  @MinLength(6, { message: 'Пароль должен быть не менее 6 символов' })
  @MaxLength(128, { message: 'Пароль должен быть не более 128 символов' })
  password: string;
}
