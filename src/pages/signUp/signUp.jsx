/* import React from 'react' */
import './signUp.css'

import Form from '../../components/form/form'
import Aside from '../../components/aside/aside'

const SignUp = () => {
    return (
        <div className="signUp">
            <Form title={'Sign up'} have={"have"} log={'Login'} />
            <Aside />
        </div>
    )
}

export default SignUp
