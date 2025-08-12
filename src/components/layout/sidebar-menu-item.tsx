import { HStack, Icon, Text, Badge, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { NavItem } from "./type";

type Props = {
    item: NavItem;
    isActive: boolean;
    onNavigate: () => void;
}

export function SidebarMenuItem({ item, isActive, onNavigate }: Props) {
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