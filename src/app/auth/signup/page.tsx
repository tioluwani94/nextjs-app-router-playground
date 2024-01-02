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

export default function SignupPage() {
  return (
    <Stack gap={4}>
        <h1 className={css({ textAlign: 'center', fontWeight: 'bold', fontSize: 'xl' })}>Sign up for free</h1>
        <Stack>
            <Button colorPalette='gray' variant='outline'><GoogleIcon css={{ w: "16px", h: "16px", color: "gray.800" }} /> Continue with Google</Button>
            <HStack>
                <Divider className={css({ w: '100%' })}/>
                <p className={css({ flexShrink: 0, color: 'fg.subtle', fontSize: 'sm' })}>or continue with</p>
                <Divider className={css({ w: '100%' })}/>
            </HStack>
            <form style={{width: '100%'}}>
                <VStack gap={6} alignItems="flex-start">
                    <VStack gap={1} w="100%" alignItems="flex-start">
                        <Label htmlFor='email'>Email</Label>
                        <Input id="email" name='email' type='email'  />
                    </VStack>
                    <VStack gap={1} w="100%" alignItems="flex-start">
                        <Label htmlFor='password'>Password</Label>
                        <PasswordInput id="password" name='password' />
                    </VStack>
                    <Button w="100%">Sign up</Button>
                    <HStack w="100%" gap={1} justify="center">
                        <p className={css({fontSize: 'sm', color: 'fg.muted'})}>Already have an account?</p>
                        <Link asChild textStyle='sm'><NextLink href='/auth/login'>Log in</NextLink></Link>
                    </HStack>
                </VStack>
            </form>
        </Stack>
    </Stack>
  )
}
