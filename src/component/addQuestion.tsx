import React from 'react'
import { Col, Dropdown, Form, Row } from 'react-bootstrap'

const AddQuestion = () => {

  return (
    <div>
        <Form>
        <h3>Add Question</h3>
            <Row>
                <Col xs={6}>
            <Form.Group>
                <Form.Label>Select Subject</Form.Label>
                <Dropdown>
                    <Dropdown.Toggle>
                        Type to search Subject...
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Angular</Dropdown.Item>
                        <Dropdown.Item>React JS</Dropdown.Item>
                        <Dropdown.Item>Node JS</Dropdown.Item>
                        <Dropdown.Item>JavaScript</Dropdown.Item>
                        <Dropdown.Item>HTML/CSS</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Form.Group>
            </Col>
            <Col xs={6}>
            <Form.Group>
                <Form.Label>Select Topic</Form.Label>
                <Dropdown>
                    <Dropdown.Toggle>Type to search Topic...</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Modular Angular Architecture</Dropdown.Item>
                        <Dropdown.Item>One-way Dataflow and Immutability</Dropdown.Item>
                        <Dropdown.Item>Attribute and Structural Directives</Dropdown.Item>
                        <Dropdown.Item>Component Life Cycle Hooks</Dropdown.Item>
                        <Dropdown.Item>Http and Observable Services</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 
            </Form.Group>
            </Col>
            </Row>
            <Row>
                <Col xs={3}>
                    <Form.Label>Question Type</Form.Label>
                    <Dropdown>
                        <Dropdown.Toggle>Type to search...</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Multiple Choice</Dropdown.Item>
                            <Dropdown.Item>Multiple Response</Dropdown.Item>
                            <Dropdown.Item>Fill in blanks</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col xs={3}>
                    <Form.Label>Difficulty Level</Form.Label>
                    <Dropdown>
                        <Dropdown.Toggle>Type to search...</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Hard</Dropdown.Item>
                            <Dropdown.Item>Medium</Dropdown.Item>
                            <Dropdown.Item>Easy</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col xs={3}>
                    <Form.Label>Right Marks</Form.Label>
                    <Form.Control 
                        type='text'
                        name='rightMarks'/>
                </Col>
                <Col xs={3}>
                    <Form.Label>Wrong Marks</Form.Label>
                    <Form.Control 
                        type='text'
                        name='wrongMarks'/>
                </Col>
            </Row>
            <Row>
                <Form.Label>Question</Form.Label>
                <Form.Control as="textarea" rows={6}/>
            </Row>
            <Form.Group>
                <Row>
                    <Col xs={2}>
                        <Form.Check type='checkbox' label="option" />
                    </Col>
                    <Col xs={10}>
                        <Form.Control type='text' />
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    </div>
  )
}

export default AddQuestion