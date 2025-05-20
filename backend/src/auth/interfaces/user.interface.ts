import { $Enums, User } from '@prisma/client';

export interface IUser
  extends Omit<User, 'password' | 'createdAt' | 'updatedAt'> {
  role: $Enums.Role;

  id: string;
  email: string;
  username: string;
}
