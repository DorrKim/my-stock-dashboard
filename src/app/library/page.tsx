import { Heading, Text, VStack } from "@chakra-ui/react"

export default function LibraryPage() {
  return (
    <VStack align="stretch" gap="4">
      <Heading size="lg">Library</Heading>
      <Text color="fg.muted">저장한 항목/컬렉션을 표시합니다.</Text>
    </VStack>
  )
}


