import NextLink from 'next/link';
import React from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Link } from '~/components/ui/link';
import { css } from '~/styled-system/css';
import { Stack, VStack } from '~/styled-system/jsx';

export default function ForgotPasswordPage() {
  return (
    <Stack gap={4}>
        <h1 className={css({ textAlign: 'center', fontWeight: 'bold', fontSize: 'xl' })}>Welcome back</h1>
        <form style={{width: '100%'}}>
            <Stack gap={6}>
                <VStack gap={1} w="100%" alignItems="flex-start">
                    <Label htmlFor='email'>Your email address</Label>
                    <Input id="email" name='email' type='email'  />
                </VStack>
                <Button>Reset password</Button>
                <Link display="block" asChild textStyle='sm' textAlign="center">
                    <NextLink href='/auth/login'>Back to log in</NextLink>
                </Link>
            </Stack>
        </form>
    </Stack>
  )
}
