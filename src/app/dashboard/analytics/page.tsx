import { Heading, Text, VStack, Card } from "@chakra-ui/react"

export default function AnalyticsPage() {
  return (
    <VStack align="stretch" gap="4">
      <Heading size="lg">Analytics</Heading>
      <Card.Root>
        <Card.Header>
          <Card.Title>개요</Card.Title>
          <Card.Description>분석 지표 현황</Card.Description>
        </Card.Header>
        <Card.Body>
          <Text color="fg.muted">차트/지표 컴포넌트를 여기에 배치하세요.</Text>
        </Card.Body>
      </Card.Root>
    </VStack>
  )
}
