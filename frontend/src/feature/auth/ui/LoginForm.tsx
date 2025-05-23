'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';

import { LogoImage } from '@/shared/ui/logo';
import { LoginFormData, loginSchema } from '../model/loginSchema';
import { useRouter } from 'next/navigation';
import { useLogin } from '../api/useAuth';

export const LoginForm = () => {
  const router = useRouter();
  const { mutate: login, isPending } = useLogin();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormData) => {
    login(data, {
      onSuccess: () => {
        router.push('/news');
      },
      onError: (error) => {
        console.error('Login error:', error);
        form.setError('root', {
          type: 'manual',
          message: 'Неверный email или пароль',
        });
      },
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <LogoImage />

      <div className="w-full max-w-md space-y-4">
        <h1 className="text-xl font-semibold">Вход</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Введите ваш email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Введите ваш пароль"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.formState.errors.root && (
              <p className="text-sm font-medium text-destructive">
                {form.formState.errors.root.message}
              </p>
            )}

            <Button type="submit" className="w-full mt-7" disabled={isPending}>
              {isPending ? 'Вход...' : 'Войти'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
