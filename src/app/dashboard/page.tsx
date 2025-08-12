import { Heading, Text, VStack, Card } from "@chakra-ui/react"

export default function Dashboard() {
  return (
    <VStack align="stretch" gap="4">
      <Heading size="lg">Dashboard</Heading>
      <Card.Root>
        <Card.Header>
          <Card.Title>환영합니다</Card.Title>
          <Card.Description>포트폴리오 요약을 여기에 표시합니다.</Card.Description>
        </Card.Header>
        <Card.Body>
          <Text color="fg.muted">차트/위젯을 추가해보세요.</Text>
        </Card.Body>
      </Card.Root>
    </VStack>
  )
}