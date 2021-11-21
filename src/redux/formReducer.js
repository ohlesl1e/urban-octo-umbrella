const initialState = {
    fname: '',
    lname: '',
    title: '',
    heightFeet: 0,
    heightInches: 0,
    phone: '',
    street: '',
    apt: '',
    city: '',
    state: '',
    zip: 0,
    email: '',
    service1: false,
    service2: false,
    service3: false,
    service4: false,
    service5: false,
    budget: '',
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'FORM_SET_RESULT':
            return payload

        default:
            return state
    }
}
