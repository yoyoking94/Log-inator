/* import React from 'react' */
import './signIn.css'

import Form from '../../components/form/form'
import Aside from '../../components/aside/aside'

const SignIn = () => {
    return (
        <div className="signIn">
            <Form title={'Sign in'} negation={"don't"} log={'Register'} />
            <Aside />
        </div>
    )
}

export default SignIn
