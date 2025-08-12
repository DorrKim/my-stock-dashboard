import { Heading, Text, VStack } from "@chakra-ui/react"

export default function SettingsPage() {
  return (
    <VStack align="stretch" gap="4">
      <Heading size="lg">Settings</Heading>
      <Text color="fg.muted">환경설정 영역입니다.</Text>
    </VStack>
  )
}


