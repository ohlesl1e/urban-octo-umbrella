import React from 'react'
import { Container, Form, Row, Col, FormGroup, FormLabel, FormControl, FormSelect, FormCheck, Card } from 'react-bootstrap'

function Home() {
    return (
        <div>
            <Container as={Card} className='p-3'>
                <h1>CSC 642 848 Fall 2021 Individual Assignment Leslie Zhou</h1>
                <h2>Data survey form</h2>
                <Form>
                    <Row className='mb-3'>
                        <FormGroup as={Col}>
                            <FormLabel>Last name*</FormLabel>
                            <FormControl type='name' placeholder='Enter your name' />
                        </FormGroup>
                        <FormGroup as={Col}>
                            <FormLabel>First name*</FormLabel>
                            <FormControl type='name' placeholder='Enter your name' />
                        </FormGroup>
                    </Row>

                    <FormGroup className='mb-3'>
                        <FormLabel>Preferred title*</FormLabel>
                        <FormSelect defaultValue='Choose...' >
                            <option>Choose...</option>
                            <option>none</option>
                            <option>student</option>
                            <option>professor</option>
                            <option>staff</option>
                            <option>retired</option>
                        </FormSelect>
                    </FormGroup>


                    <FormGroup className='mb-3'>
                        <FormLabel>Height</FormLabel>
                        <Row>
                            <Col>
                                <FormLabel>Feet</FormLabel>
                                <FormControl type='number' />
                            </Col>
                            <Col>
                                <FormLabel>Inches</FormLabel>
                                <FormControl type='number' />
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup className='mb-3'>
                        <FormLabel>Phone</FormLabel>
                        <input type="range" class="form-range" min="1000000000" max="9999999999" step="1" id="customRange3" />
                    </FormGroup>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address*</Form.Label>
                        <Form.Control placeholder="911 Bush St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City*</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State*</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip*</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <FormGroup className='mb-3'>
                        <FormLabel>Check all services you require</FormLabel>
                            <FormCheck type='checkbox' label='e-mail'/>
                            <FormCheck type='checkbox' label='Facebook'/>
                            <FormCheck type='checkbox' label='Twitter'/>
                            <FormCheck type='checkbox' label='surface mail'/>
                            <FormCheck type='checkbox' label='personal visit'/>
                    </FormGroup>

                    <FormGroup className='mb-3'>
                        <FormLabel>Check all services you require</FormLabel>
                            <FormCheck type='radio' label='Less than $50'/>
                            <FormCheck type='radio' label='Between $50 and $100'/>
                            <FormCheck type='radio' label='Above $100'/>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
}

export default Home
