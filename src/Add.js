import { Form, Button, Stack, Card } from "react-bootstrap"
import { BsPlusLg } from 'react-icons/bs'

const Add = ({ handleChangeTodoName, todoName, addTodo }) => {
  return (
    <Card className="mt-5" >
      <Card.Body>
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            type="text"
            placeholder="Masukkan Todo..."
            onChange={handleChangeTodoName}
            value={todoName}
          />
          <Button onClick={addTodo}>
            <BsPlusLg />
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  )
}

export default Add