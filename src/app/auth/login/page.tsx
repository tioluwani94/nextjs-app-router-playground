import React from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Link } from '~/components/ui/link';
import NextLink from 'next/link'
import { PasswordInput } from '~/components/ui/password-input';
import { css } from '~/styled-system/css';
import { Divider, HStack, Stack, VStack } from '~/styled-system/jsx';
import { GoogleIcon } from '~/components/icons/google';
import { redirect } from 'next/navigation';

export default function LoginPage() {
    const handleLogin = async (formData: FormData) => {
        "use server"
        const payload = Object.fromEntries(formData.entries())
        console.log(payload)
        redirect('/t/settings')
    }
  return (
    <Stack gap={4}>
        <h1 className={css({ textAlign: 'center', fontWeight: 'bold', fontSize: 'xl' })}>Welcome back</h1>
        <Stack>
            <Button colorPalette='gray' variant='outline'><GoogleIcon css={{ w: "16px", h: "16px", color: "gray.800" }} /> Continue with Google</Button>
            <HStack>
                <Divider className={css({ w: '100%' })}/>
                <p className={css({ flexShrink: 0, color: 'fg.subtle', fontSize: 'sm' })}>or continue with</p>
                <Divider className={css({ w: '100%' })}/>
            </HStack>
            <form action={handleLogin}>
                <VStack gap={6} alignItems="flex-start">
                    <VStack gap={1} w="100%" alignItems="flex-start">
                        <Label htmlFor='email'>Email</Label>
                        <Input id="email" name='email' type='email'  />
                    </VStack>
                    <VStack gap={1} w="100%" alignItems="flex-start">
                        <Label htmlFor='password'>Password</Label>
                        <PasswordInput id="password" name='password' />
                    </VStack>
                    <Link asChild textStyle='sm'>
                        <NextLink href="/auth/forgot-password">Forgot Password?</NextLink>
                    </Link>
                    <Button w="100%" type="submit">Login</Button>
                    <HStack w="100%" gap={1} justify="center">
                        <p className={css({fontSize: 'sm', color: 'fg.muted'})}>No account yet?</p>
                        <Link asChild textStyle='sm'><NextLink href='/auth/signup'>Sign up</NextLink></Link>
                    </HStack>
                </VStack>
            </form>
        </Stack>
    </Stack>
  )
}
