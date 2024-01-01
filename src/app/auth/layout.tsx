import React, { ReactNode } from 'react'
import { css } from '~/styled-system/css';
import { Container, Flex } from '~/styled-system/jsx';

const AuthLayout = ({children}:{children:ReactNode}) => {
  return (
    <Flex align="center" justify='center' w="100%" h="100vh">
        <Container maxW="xl" w="100%">
            <h1 className={css({ fontWeight: 'bold', fontSize: '3xl', mb: '6', textAlign: 'center'})}>Logo</h1>
            {children}
        </Container>
    </Flex>
  )
}

export default AuthLayout
