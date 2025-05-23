import { z } from 'zod';

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, 'Логин должен быть не менее 3 символов')
    .max(20, 'Логин должен быть не более 20 символов'),
  email: z
    .string()
    .email('Введите корректный email')
    .min(5, 'Email должен быть не менее 5 символов'),
  password: z
    .string()
    .min(6, 'Пароль должен быть не менее 6 символов')
    .max(30, 'Пароль должен быть не более 30 символов'),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
