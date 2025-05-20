import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
} from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'aydlioh@example.com',
    description: 'Email пользователя',
  })
  @ApiProperty({ example: 'aydlioh', description: 'Email пользователя' })
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
