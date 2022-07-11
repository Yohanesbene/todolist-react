import { Button, Card, Row, Col } from "react-bootstrap"
import { BsCheckLg } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

const List = ({ todoList, deleteTodo, finishTodo }) => {
  return todoList.map((value, index) => {
    return (
      <Card className="mt-2" key={index.toString()}>
        <Card.Body>
          <Row>
            {/* Todo Name */}
            <Col>
              <h3>{value.todoName}</h3>
            </Col>

            {/* Button Done */}
            <Col xl="1">
              <Button
                variant={value.status ? 'secondary' : 'primary'}
                onClick={() => finishTodo(index)}
              >
                {value.status ? <FaTimes /> : <BsCheckLg />}
              </Button>
            </Col>
          </Row>
          <Button variant='danger' className='mt-2' onClick={() => deleteTodo(index)}>Delete</Button>
        </Card.Body>
      </Card>
    )
  })
}

export default List