import "./App.css"
import { Container, Form, Button, Stack, Card } from "react-bootstrap"

function App() {
  return (
    <Container>
      <h1 className="text-center mt-5">Todo Web App</h1>

      <Card className="mt-5">
        <Card.Body>
          <Stack direction="horizontal" gap={3}>
            <Form.Control type="text" placeholder="Masukkan Todo..." />
            <Button>Add</Button>
          </Stack>
        </Card.Body>
      </Card>


    </Container>
  )
}

export default App
