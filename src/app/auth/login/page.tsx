import React from 'react'
import { ViewIcon } from '~/components/icons/view';
import { ViewOffIcon } from '~/components/icons/view-off';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { PasswordInput } from '~/components/ui/password-input';
import { css } from '~/styled-system/css';
import { Divider, HStack, Stack, VStack } from '~/styled-system/jsx';

export default function LoginPage() {
  return (
    <Stack gap={4}>
        <h1 className={css({ textAlign: 'center', fontWeight: 'bold', fontSize: 'xl' })}>Welcome back</h1>
        <Stack>
            <Button colorPalette='gray' variant='outline'>Continue with Google</Button>
            <HStack>
                <Divider className={css({ w: '100%' })}/>
                <p className={css({ flexShrink: 0, color: 'fg.subtle', fontSize: 'sm' })}>or continue with</p>
                <Divider className={css({ w: '100%' })}/>
            </HStack>
            <form style={{width: '100%'}}>
                <VStack gap={6} alignItems="flex-start">
                    <VStack gap={1} w="100%" alignItems="flex-start">
                        <label htmlFor='email'>Email</label>
                        <Input id="email" name='email' type='email'  />
                    </VStack>
                    <VStack gap={1} w="100%" alignItems="flex-start">
                        <label htmlFor='password'>Password</label>
                        <PasswordInput id="password" name='password' />
                    </VStack>
                    <Button w="100%">Login</Button>
                </VStack>
            </form>
        </Stack>
    </Stack>
  )
}
