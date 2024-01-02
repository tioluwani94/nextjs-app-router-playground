import React from 'react';
import { Avatar } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import { Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { Heading } from '~/components/ui/heading';
import { Icon } from '~/components/ui/icon';
import { Text } from '~/components/ui/text';
import { Box, HStack, Stack, VStack } from '~/styled-system/jsx';

export default function SettingsOverviewPage() {
  return (
    <>
      <Stack gap={1} mb={10}>
        <Heading as="h1" fontSize='2xl'>Overview</Heading>
        <Text textStyle='sm' color="fg.subtle">Manage your organization settings</Text>
      </Stack>
      <VStack gap={6} alignItems='flex-start'>
        <Heading as="h2">Organization settings</Heading>
        <HStack gap={8} w="100%">
          <Card width='100%'>
            <CardHeader py={3} borderBottomWidth='1px' flex={1}>
              <HStack w="100%">
                <Icon css={{h:'40px', w:'40px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                </Icon>
                <Box>
                  <CardTitle>Billing</CardTitle>
                  <CardDescription>Manage your subscription.</CardDescription>
                </Box>
              </HStack>
            </CardHeader>
            <CardBody py={3} borderBottomWidth='1px'>
              <VStack alignItems="flex-start">
                <HStack>
                  <Text textStyle='sm' color="fg.muted">Billing plan</Text>
                  <Text textStyle='sm'>Pro</Text>
                </HStack>
                <HStack>
                  <Text textStyle='sm' color="fg.muted">Trial ends</Text>
                  <Text textStyle='sm'>1/15/2024</Text>
                </HStack>
              </VStack>
            </CardBody>
            <CardFooter py={3}>
              <HStack alignItems='flex-end'>
                <Button size="xs">Upgrade</Button>
              </HStack>
            </CardFooter>
          </Card>
          <Card width='100%'>
            <CardHeader py={3} borderBottomWidth='1px' flex={1}>
              <HStack w="100%">
                <Avatar />
                <Box>
                  <CardTitle>Organization</CardTitle>
                  <CardDescription>Manage your organization details.</CardDescription>
                </Box>
              </HStack>
            </CardHeader>
            <CardBody py={3} borderBottomWidth='1px'>
              <VStack alignItems="flex-start">
                <HStack>
                  <Text textStyle='sm' color="fg.muted">Name</Text>
                  <Text textStyle='sm'>Pro</Text>
                </HStack>
                <HStack>
                  <Text textStyle='sm' color="fg.muted">Email</Text>
                  <Text textStyle='sm'>1/15/2024</Text>
                </HStack>
              </VStack>
            </CardBody>
            <CardFooter py={3}>
              <HStack alignItems='flex-end'>
                <Button size="xs" variant='outline'>Update</Button>
              </HStack>
            </CardFooter>
          </Card>
        </HStack>
      </VStack>
    </>
  )
}
