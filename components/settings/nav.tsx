"use client";

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { HStack, VStack, VstackProps } from "~/styled-system/jsx";
import { Link, LinkProps } from "../ui/link";
import { Text } from "../ui/text";

const NavSection = (props: VstackProps) => <VStack px={3} alignItems="flex-start" {...props} />

const NavListHeader = ({label, icon}: {label:string; icon?: ReactNode}) => {
    return (
        <HStack w="100%" px={3} alignItems="center" justify="flex-start">
            {icon && <>{icon}</>}
            <Text fontWeight='medium' textStyle='xs' color="fg.subtle">{label}</Text>
        </HStack>
    )
}

const NavList = (props: VstackProps) => {
    return (
        <VStack gap={1} w="100%" alignItems="flex-start" {...props} />
    )
}


const NavListItem = (props: Omit<LinkProps, 'href'> & NextLinkProps) => {
    const {href, children, ...rest} = props;

    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            h={8}
            pr={3}
            pl={8} 
            asChild
            w="100%" 
            rounded={4} 
            textStyle="sm"
            fontWeight="normal"
            textDecoration='none' 
            _hover={{
                bg: 'colorPalette.a3'
            }}
            bg={isActive ? 'colorPalette.a3' : 'transparent'}
            {...rest}
        >
            <NextLink href={href}>{children}</NextLink>
        </Link>
    )
}

const List = NavList
const Item = NavListItem
const Section = NavSection
const Header = NavListHeader

export { Header, List, Item, Section };
