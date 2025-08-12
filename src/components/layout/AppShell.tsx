"use client"

import React from "react"
import { usePathname } from "next/navigation"
import {
  Box,
  Flex,
  HStack,
  VStack,
  Icon,
  IconButton,
  Drawer,
  Text,
  useDisclosure,
  Separator,
} from "@chakra-ui/react"
import { LuMenu, LuLayoutDashboard, LuSettings, LuLibrary } from "react-icons/lu"
import { ColorModeButton } from "@/components/ui/color-mode"
import type { NavItem } from "./type"
import { SidebarContent } from "./sidebar-menu"

const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LuLayoutDashboard },
 { label: "Library", href: "/library", icon: LuLibrary, badge: "New" },
  { label: "Settings", href: "/settings", icon: LuSettings },
]


export default function AppShell({ children }: { children: React.ReactNode }) {
  const { open, onOpen, onClose, setOpen } = useDisclosure()
  const pathname = usePathname()

  return (
    <Flex minH="100dvh" bg="bg" color="fg">
      {/* Desktop sidebar */}
      <Box
        display={{ base: "none", md: "block" }}
        as="nav"
        w="64"
        borderRightWidth="1px"
        bg="bg.panel"
      >
        <VStack align="stretch" p="4" gap="4">
          <HStack justify="space-between" px="2">
            <Text fontSize="lg" fontWeight="bold">My Stock</Text>
            <ColorModeButton />
          </HStack>
          <Separator />
          <SidebarContent navItems={NAV_ITEMS} pathname={pathname} />
        </VStack>
      </Box>

      {/* Mobile drawer sidebar */}
      <Drawer.Root placement="start" open={open} onOpenChange={(details) => setOpen(details.open)} size="xs">
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content bg="bg.panel">
            <Drawer.Header>
              <HStack justify="space-between" w="full">
                <Text fontSize="lg" fontWeight="bold">My Stock</Text>
                <ColorModeButton />
              </HStack>
            </Drawer.Header>
            <Drawer.Body>
              <SidebarContent navItems={NAV_ITEMS} pathname={pathname} onNavigate={onClose} />
            </Drawer.Body>
            <Drawer.CloseTrigger />
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>

      {/* Main area */}
      <Flex direction="column" flex="1" minW={0}>
        {/* Top bar */}
        <HStack h="14" px="4" borderBottomWidth="1px" bg="bg.panel">
          <IconButton
            display={{ md: "none" }}
            variant="ghost"
            aria-label="Open menu"
            onClick={onOpen}
          >
            <Icon as={LuMenu} />
          </IconButton>
          <HStack gap="2">
            <Text fontWeight="semibold">Ready for Toss</Text>
            <Text color="fg.muted">|</Text>
            <Text color="fg.muted">Dashboard</Text>
          </HStack>
          <Flex ms="auto" display={{ base: "none", md: "flex" }}>
            <ColorModeButton />
          </Flex>
        </HStack>

        {/* Content */}
        <Box as="main" p={{ base: 4, md: 6 }}>
          {children}
        </Box>
      </Flex>
    </Flex>
  )
}


