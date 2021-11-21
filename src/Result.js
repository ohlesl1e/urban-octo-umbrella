import React from 'react'
import { Card, Container, ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

export const Result = ({
    fname,
    lname,
    title,
    heightFeet,
    heightInches,
    phone,
    street,
    apt,
    city,
    state,
    zip,
    email,
    service1,
    service2,
    service3,
    service4,
    service5,
    budget,
}) => {
    const navigate = useNavigate()

    useEffect(() => {

        if (fname === '') {
            navigate('/urban-octo-umbrella/')
        }
    })

    return (
        <div>
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title><h1>Result verification page Leslie Zhou</h1></Card.Title>
                        <Card.Title>Name</Card.Title>
                        <Card.Text>{`${fname} ${lname}`}</Card.Text>
                        <Card.Title>Preferred title</Card.Title>
                        <Card.Text>{`${title}`}</Card.Text>
                        {heightFeet && <div className='mb-3'>
                            <Card.Title>Height</Card.Title>
                            <Card.Text>{`${heightFeet}'`}{heightInches ? ` ${heightInches}"` : ` 0"`}</Card.Text>
                        </div>
                        }
                        {phone && <div className='mb-3'>
                            <Card.Title>Phone</Card.Title>
                            <Card.Text>{`${phone}`}</Card.Text>
                        </div>}

                        <Card.Title>Address</Card.Title>
                        <Card.Text>{`${street}`}{apt && `, ${apt}`}<br />{`${city}, ${state} ${zip}`}</Card.Text>
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe
                                    title='map'
                                    width="100%"
                                    height="500"
                                    id="gmap_canvas"
                                    src={`https://maps.google.com/maps?q=${street}%2C%20${city}%2C%20${state}%20${zip}&t=&z=11&ie=UTF8&iwloc=&output=embed`}
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"></iframe>
                            </div>
                        </div>
                        {(service1 || service2 || service3 || service4 || service5) &&
                            <div className='mb-3'>
                                <Card.Title>Service required</Card.Title>
                                <ListGroup>
                                    {service1 && <ListGroup.Item>Email</ListGroup.Item>}
                                    {service2 && <ListGroup.Item>Facebook</ListGroup.Item>}
                                    {service3 && <ListGroup.Item>Twitter</ListGroup.Item>}
                                    {service4 && <ListGroup.Item>Surface mail</ListGroup.Item>}
                                    {service5 && <ListGroup.Item>Personal visit</ListGroup.Item>}
                                </ListGroup>
                            </div>
                        }
                        {budget &&
                            <div className='mb-3'>
                                <Card.Title>Monthly budget for services</Card.Title>
                                <Card.Text>{budget}</Card.Text>
                            </div>
                        }
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({
    fname: state.fname,
    lname: state.lname,
    title: state.title,
    heightFeet: state.heightFeet,
    heightInches: state.heightInches,
    phone: state.phone,
    street: state.street,
    apt: state.apt,
    city: state.city,
    state: state.state,
    zip: state.zip,
    email: state.email,
    service1: state.service1,
    service2: state.service2,
    service3: state.service3,
    service4: state.service4,
    service5: state.service5,
    budget: state.budget,
})

export default connect(mapStateToProps)(Result)
