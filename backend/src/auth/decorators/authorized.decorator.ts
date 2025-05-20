/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { UserResponseDto } from '../dto/user.dto';

export const Authorized = createParamDecorator(
  (data: keyof UserResponseDto, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();

    const user = request.user;

    return data ? user![data] : user;
  },
);
