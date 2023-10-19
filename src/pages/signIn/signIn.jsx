/* import React from 'react' */
import './signIn.css'

import Form from '../../components/form/form'
import Aside from '../../components/aside/aside'

const SignIn = () => {
    return (
        <div className="signIn">
            <Form login={true} password={false} title={'Sign in'} negation={"don't"} log={'Register'} btn={'Login'} />
            <Aside span={'In'} />
        </div>
    )
}

export default SignIn
