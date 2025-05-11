import * as z from 'zod';

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: 'Логин должен содержать минимум 3 символа' })
      .max(20, { message: 'Логин слишком длинный' }),
    password: z
      .string()
      .min(6, { message: 'Пароль должен содержать минимум 6 символов' })
      .max(50, { message: 'Пароль слишком длинный' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Подтверждение пароля обязательно' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });
export const loginSchema = z.object({
  username: z.string().min(3, 'Логин должен содержать минимум 3 символа'),
  password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
