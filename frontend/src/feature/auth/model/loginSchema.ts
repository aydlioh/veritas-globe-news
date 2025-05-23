import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .email('Введите корректный email')
    .min(5, 'Email должен быть не менее 5 символов'),
  password: z
    .string()
    .min(6, 'Пароль должен быть не менее 6 символов')
    .max(30, 'Пароль должен быть не более 30 символов'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
