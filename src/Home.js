import React from 'react'
import { Container, Form, Row, Col, FormGroup, FormLabel, FormControl, FormSelect, FormCheck, Card, Button, FormText, FloatingLabel, ProgressBar } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel'
import RangeSlider from 'react-bootstrap-range-slider'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import ReCAPTCHA from 'react-google-recaptcha'
import { connect } from 'react-redux'
import { setForm } from './redux/formAction'

function Home({ dispatch }) {
	let navigate = useNavigate()
	const abortController = new AbortController()
	const recaptchaRef = React.createRef()
	const [validated, setvalidated] = useState(false)
	const [fname, setfname] = useState(undefined)
	const [lname, setlname] = useState(undefined)
	const [title, settitle] = useState(undefined)
	const [heightFeet, setheightFeet] = useState(undefined)
	const [heightInches, setheightInches] = useState(undefined)
	const [phone, setphone] = useState('')
	const [street, setstreet] = useState(undefined)
	const [apt, setapt] = useState(undefined)
	const [city, setcity] = useState(undefined)
	const [state, setstate] = useState(undefined)
	const [zip, setzip] = useState('')
	const [email, setemail] = useState(undefined)
	const [service1, setservice1] = useState(false)
	const [service2, setservice2] = useState(false)
	const [service3, setservice3] = useState(false)
	const [service4, setservice4] = useState(false)
	const [service5, setservice5] = useState(false)
	const [budget, setbudget] = useState('')
	const [position, setposition] = useState(0)

	useEffect(() => {
		scrollListener()
		return () => {
			abortController.abort()
		}
	})

	const formatPhoneNumber = value => {
		if (!value) return value;
		const phoneNumber = value.replace(/[^\d]/g, "");
		const phoneNumberLength = phoneNumber.length;

		if (phoneNumberLength < 4) return phoneNumber;

		if (phoneNumberLength < 7) {
			return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
		}

		return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
	}

	const handleSubmit = event => {
		const recaptchaValue = recaptchaRef.current.getValue()
		const form = event.currentTarget
		if (form.checkValidity() === false || recaptchaValue === '') {
			event.preventDefault()
			event.stopPropagation()
			if (recaptchaValue === '') {
				alert('Please do the captcha')
			}
		} else {
			dispatch(setForm({
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
			}))
			navigate('/urban-octo-umbrella/result')

		}
		setvalidated(true)
	}

	const scrollListener = () => {
		document.addEventListener('scroll', () => {
			requestAnimationFrame(() => {
				calculateScrollDistance()
			})
		})
	}

	const calculateScrollDistance = () => {
		const scrollTop = window.scrollY
		const windowHeight = window.innerHeight
		const documentHeight = getDocHeight()

		const scrollLength = documentHeight - windowHeight
		setposition(Math.floor(scrollTop / scrollLength * 100))
	}

	const getDocHeight = () => {
		return Math.max(
			document.body.scrollHeight,
			document.body.offsetHeight,
			document.body.clientHeight,
			document.documentElement.scrollHeight,
			document.documentElement.offsetHeight,
			document.documentElement.clientHeight,
		)
	}

	return (
		<div>
			<Container as={Card} className='p-3'>
				<ProgressBar className='fixed-top container' style={{ padding: '0' }} now={position} />
				<h1>CSC 642 848 Fall 2021 Individual Assignment Leslie Zhou</h1>
				<h2>Data survey form</h2>
				{/* First and last name */}
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<br />
					<FormLabel className='text-muted'>Personal information</FormLabel>
					<hr className='mt-0' />
					<Row className='mb-3'>
						<FormGroup as={Col} controlId='lastName'>
							<FormLabel><b>Last name*</b></FormLabel>
							<FormControl
								type='name'
								required={true}
								placeholder='Enter your last name'
								size='lg'
								onInput={e => setlname(e.target.value)}
							/>
							<FormControl.Feedback type='invalid'>
								Please enter a last name.
							</FormControl.Feedback>
						</FormGroup>
						<FormGroup as={Col} controlId='firstName'>
							<FormLabel><b>First name*</b></FormLabel>
							<FormControl
								type='name'
								required
								placeholder='Enter your first name'
								size='lg'
								onInput={e => setfname(e.target.value)}
							/>
							<FormControl.Feedback type='invalid'>
								Please enter a first name.
							</FormControl.Feedback>
						</FormGroup>
					</Row>

					{/* Preferred title */}
					<FormGroup className='mb-3' controlId='preferredTitle'>
						<FormLabel><b>Preferred title*</b></FormLabel>
						<FormSelect
							size='lg'
							required
							onChange={e => settitle(e.target.value)}
						>
							<option value=''>Choose...</option>
							<option>none</option>
							<option>Student</option>
							<option>Professor</option>
							<option>Staff</option>
							<option>Retired</option>
						</FormSelect>
						<FormControl.Feedback type='invalid'>
							Please select a valid preferred title.
						</FormControl.Feedback>
					</FormGroup>

					{/* Height */}
					<FormGroup className='mb-3' controlId='height'>
						<FormLabel><b>Height</b></FormLabel>
						<Row>
							<Col>
								<FloatingLabel label='Feet'>
									<FormControl
										type='number'
										min={3}
										max={8}
										placeholder='5'
										onInput={e => setheightFeet(e.target.value)}
									/>
								</FloatingLabel>
							</Col>
							<Col>
								<FloatingLabel label='Inches'>
									<FormControl
										type='number'
										min={0}
										max={11}
										placeholder='5'
										onInput={e => setheightInches(e.target.value)}
									/>
								</FloatingLabel>
							</Col>
						</Row>
					</FormGroup>

					<br />
					<FormLabel className='text-muted'>Contact information</FormLabel>
					<hr className='mt-0' />
					{/* Phone number */}
					<FormGroup controlId='phone'>
						<FormLabel><b>Phone</b></FormLabel><br />
						<Row>
							<Col md='4'>
								<FormControl
									type='tel'
									value={phone}
									placeholder='(555) 555-5555'
									onInput={e => setphone(formatPhoneNumber(e.target.value.toString()))}
									size='lg'
								/>
							</Col>
							<Col md='8'>
								<RangeSlider
									min={1000000000}
									max={9999999999}
									value={isNaN(parseInt(phone.toString().replace(/\D/g, ''))) ? 5555555555 : parseInt(phone.toString().replace(/\D/g, ''))}
									onInput={e => setphone(formatPhoneNumber(e.target.value.toString()))}
									size='lg'
								/>
								<FormText className="text-muted">
									This slider is just a joke. Don't take points off for this.
								</FormText>
							</Col>
						</Row>
					</FormGroup>

					{/* Address */}
					<Form.Group className="mb-3" controlId='street'>
						<Form.Label><b>Address*</b></Form.Label>
						<Form.Control
							placeholder="420 Blaze Ave"
							required
							size='lg'
							onInput={e => setstreet(e.target.value)}
						/>
						<FormControl.Feedback type='invalid'>
							Please enter a valid address.
						</FormControl.Feedback>
					</Form.Group>

					<Form.Group className="mb-3" controlId='apt'>
						<Form.Label><b>Address 2</b></Form.Label>
						<Form.Control
							placeholder="Apartment, suite, etc."
							size='lg'
							onInput={e => setapt(e.target.value)}
						/>
					</Form.Group>

					<Row className="mb-3">
						<Form.Group as={Col} controlId="city">
							<Form.Label><b>City*</b></Form.Label>
							<Form.Control
								placeholder='San Francisco'
								required
								type='city'
								size='lg'
								onInput={e => setcity(e.target.value)}
							/>
							<FormControl.Feedback type='invalid'>
								Please enter a valid city.
							</FormControl.Feedback>
						</Form.Group>

						<Form.Group as={Col} controlId="state">
							<Form.Label><b>State*</b></Form.Label>
							<Form.Select
								required
								size='lg'
								onChange={e => setstate(e.target.value)}
							>
								<option value=''>Choose...</option>
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
							<FormControl.Feedback type='invalid'>
								Please select a state.
							</FormControl.Feedback>
						</Form.Group>

						<Form.Group as={Col} controlId="zip">
							<Form.Label><b>ZIP code*</b></Form.Label>
							<Form.Control
								type='number'
								required
								value={zip}
								min={10000}
								max={99999}
								size='lg'
								onInput={e => setzip(e.target.value)}
							/>
							<FormControl.Feedback type='invalid'>
								Please enter a valid zip.
							</FormControl.Feedback>
						</Form.Group>
					</Row>

					{/* Email */}
					<FormGroup className='mb-3' controlId='email'>
						<FormLabel><b>Email*</b></FormLabel>
						<FormControl
							required
							type='email'
							size='lg'
							placeholder='ealderson@ecorp.com'
							onInput={e => setemail(e.target.value)}
						/>
						<FormControl.Feedback type='invalid'>
							Please enter a valid email.
						</FormControl.Feedback>
					</FormGroup>

					<br />
					<FormLabel className='text-muted'>Services</FormLabel>
					<hr className='mt-0' />

					{/* Check all services you require */}
					<FormGroup className='mb-3' controlId='services'>
						<FormLabel><b>Check all services you require</b></FormLabel>
						<FormCheck type='checkbox' id='service-1' onClick={() => service1 === true ? setservice1(false) : setservice1(true)} label='Email' />
						<FormCheck type='checkbox' id='service-2' onClick={() => service2 === true ? setservice2(false) : setservice2(true)} label='Facebook' />
						<FormCheck type='checkbox' id='service-3' onClick={() => service3 === true ? setservice3(false) : setservice3(true)} label='Twitter' />
						<FormCheck type='checkbox' id='service-4' onClick={() => service4 === true ? setservice4(false) : setservice4(true)} label='Surface mail' />
						<FormCheck type='checkbox' id='service-5' onClick={() => service5 === true ? setservice5(false) : setservice5(true)} label='Personal visit' />
					</FormGroup>

					{/* Your monthly budget for services */}
					<FormGroup className='mb-3' controlId='budget'>
						<FormLabel><b>Your monthly budget for services</b></FormLabel>
						<FormCheck type='radio' id='budget-1' name="budge" onClick={e => setbudget(e.target.value)} value='Less than $50' label='Less than $50' />
						<FormCheck type='radio' id='budget-2' name="budge" onClick={e => setbudget(e.target.value)} value='Between $50 and $100' label='Between $50 and $100' />
						<FormCheck type='radio' id='budget-3' name="budge" onClick={e => setbudget(e.target.value)} value='Above $100' label='Above $100' />
					</FormGroup>

					{/* Accept terms */}
					<FormGroup className='mb-3' controlId='terms'>
						<div className='form-check'>
							<FormCheckInput
								type='checkbox'
								style={{ marginInlineEnd: '.5em' }}
								required
							/>
							<FormCheckLabel>I accept the <a href='https://youtu.be/cd2FZrBgUjA' target='_blank' rel="noreferrer">Terms of service</a>*</FormCheckLabel>
							<FormControl.Feedback type='invalid'>
								You must agree before submitting.
							</FormControl.Feedback>
						</div>
					</FormGroup>

					{/* Captcha */}

					<FormGroup className='mb-3'>
						{/* <iframe src='https://infinitecaptcha.sixbeeps.com/' width='420' height='570' title='captcha' />*/}

						<ReCAPTCHA
							ref={recaptchaRef}
							sitekey='6LeBH0odAAAAABft0w8LG8ssPK6HEDAEvrc1V_nw'
						/>
					</FormGroup>


					<Button type='submit'>Submit</Button>
				</Form>
			</Container>
		</div>
	)
}

export default connect()(Home)
