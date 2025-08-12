import { VStack, HStack, Icon, Text, Badge, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { NavItem } from "./type";

type SidebarMenuProps = {
    navItems: NavItem[];
    pathname: string;
    onNavigate: () => void;
}

type SidebarMenuItemProps = {
    item: NavItem;
    isActive: boolean;
    onNavigate: () => void;
}


export function SidebarMenuItem({ item, isActive, onNavigate }: SidebarMenuItemProps) {
    return (
        (
            <ChakraLink key={item.href} as={NextLink} href={item.href} onClick={onNavigate} _hover={{ textDecoration: "none" }}>
              <HStack
                px="3"
                py="2.5"
                rounded="md"
                gap="3"
                bg={isActive ? "bg.emphasized" : "transparent"}
                color={isActive ? "fg" : "fg.muted"}
                _hover={{ bg: isActive ? "bg.emphasized" : "bg.subtle", color: "fg" }}
              >
                <Icon as={item.icon} boxSize="5" />
                <Text fontWeight={isActive ? "semibold" : "medium"}>{item.label}</Text>
                {item.badge ? (
                  <Badge colorPalette="teal" variant="solid" ms="auto">
                    {item.badge}
                  </Badge>
                ) : null}
              </HStack>
            </ChakraLink>
          )
    )
}   

export function SidebarContent({ navItems, pathname, onNavigate }: SidebarMenuProps) {
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href))
  
    return (
    <VStack align="stretch" gap="1">
      {navItems.map((item) => 
         (
          <SidebarMenuItem key={item.href} item={item} isActive={isActive(item.href)} onNavigate={onNavigate} />
        )
      )}
    </VStack>
  )
}