import React from 'react'
import { Container, Form, Row, Col, FormGroup, FormLabel, FormControl, FormSelect, FormCheck, Card, Button } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel'
import RangeSlider from 'react-bootstrap-range-slider'
import { useState } from 'react'

function Home() {
    const [phone, setphone] = useState('(555) 555-5555')

    const formatter = (value) => {
        const formattedValue = formatPhoneNumber(value.toString())
        setphone(formattedValue)
    }

    const formatPhoneNumber = value => {
        // if input value is falsy eg if the user deletes the input, then just return
        if (!value) return value;

        // clean the input for any non-digit values.
        const phoneNumber = value.replace(/[^\d]/g, "");

        // phoneNumberLength is used to know when to apply our formatting for the phone number
        const phoneNumberLength = phoneNumber.length;

        // we need to return the value with no formatting if its less then four digits
        // this is to avoid weird behavior that occurs if you  format the area code to early
        if (phoneNumberLength < 4) return phoneNumber;

        // if phoneNumberLength is greater than 4 and less the 7 we start to return
        // the formatted number
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }

        // finally, if the phoneNumberLength is greater then seven, we add the last
        // bit of formatting and return it.
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
            3,
            6
        )}-${phoneNumber.slice(6, 9)}`;
    }


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
                                <FormControl type='number' min={3} max={8} />
                            </Col>
                            <Col>
                                <FormLabel>Inches</FormLabel>
                                <FormControl type='number' min={0} max={11} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup className='mb-3'>
                        <FormLabel>Phone</FormLabel><br />
                        <Row>
                            <Col xs='3'>
                                <FormControl value={phone} onInput={e => formatter(e.target.value)} />
                            </Col>
                            <Col xs='9'>
                                <RangeSlider
                                    min={1000000000}
                                    max={9999999999}
                                    value={parseInt(phone.toString().replace(/\D/g,''))}
                                    step="1"
                                    onInput={e => formatter(e.target.value)}
                                />
                            </Col>
                        </Row>
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
                                <option>Alabama</option>
                                <option>Alaska</option>
                                <option>Arizona</option>
                                <option>Arkansas</option>
                                <option>California</option>
                                <option>Colorado</option>
                                <option>Connecticut</option>
                                <option>Delaware</option>
                                <option>Florida</option>
                                <option>Georgia</option>
                                <option>Hawaii</option>
                                <option>Idaho</option>
                                <option>Illinois</option>
                                <option>Indiana</option>
                                <option>Iowa</option>
                                <option>Kansas</option>
                                <option>Kentucky</option>
                                <option>Louisiana</option>
                                <option>Maine</option>
                                <option>Maryland</option>
                                <option>Massachusetts</option>
                                <option>Michigan</option>
                                <option>Minnesota</option>
                                <option>Mississippi</option>
                                <option>Missouri</option>
                                <option>Montana</option>
                                <option>Nebraska</option>
                                <option>Nevada</option>
                                <option>New Hampshire</option>
                                <option>New Jersey</option>
                                <option>New Mexico</option>
                                <option>New York</option>
                                <option>North Carolina</option>
                                <option>North Dakota</option>
                                <option>Ohio</option>
                                <option>Oklahoma</option>
                                <option>Oregon</option>
                                <option>Pennsylvania</option>
                                <option>Rhode Island</option>
                                <option>South Carolina</option>
                                <option>South Dakota</option>
                                <option>Tennessee</option>
                                <option>Texas</option>
                                <option>Utah</option>
                                <option>Vermont</option>
                                <option>Virginia</option>
                                <option>Washington</option>
                                <option>West Virginia</option>
                                <option>Wisconsin</option>
                                <option>Wyoming</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip*</Form.Label>
                            <Form.Control type='number' min={10000} max={99999} />
                        </Form.Group>
                    </Row>

                    <FormGroup className='mb-3'>
                        <FormLabel>Check all services you require</FormLabel>
                        <FormCheck type='checkbox' label='e-mail' />
                        <FormCheck type='checkbox' label='Facebook' />
                        <FormCheck type='checkbox' label='Twitter' />
                        <FormCheck type='checkbox' label='surface mail' />
                        <FormCheck type='checkbox' label='personal visit' />
                    </FormGroup>

                    <FormGroup className='mb-3'>
                        <FormLabel>Check all services you require</FormLabel>
                        <FormCheck type='radio' name="budge" label='Less than $50' />
                        <FormCheck type='radio' name="budge" label='Between $50 and $100' />
                        <FormCheck type='radio' name="budge" label='Above $100' />
                    </FormGroup>

                    <FormGroup className='mb-3'>
                        <iframe src='https://infinitecaptcha.sixbeeps.com/' width='420' height='570' title='captcha' />
                    </FormGroup>

                    <FormGroup className='mb-3'>
                        <FormCheck>
                            <FormCheckInput type='checkbox' style={{ marginInlineEnd: '.5em' }} />
                            <FormCheckLabel>I accept the <a href='https://youtu.be/dQw4w9WgXcQ' target='_blank' rel="noreferrer">Terms and Conditions</a></FormCheckLabel>
                        </FormCheck>
                    </FormGroup>

                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Home
