/* import React from 'react' */
import './signUp.css'

import Form from '../../components/form/form'
import Aside from '../../components/aside/aside'

const SignUp = () => {
    return (
        <div className="signUp">
            <Form password={true} login={false} title={'Sign up'} have={"have"} log={'Login'} btn={'Register'} />
            <Aside span={'Up'} />
        </div>
    )
}

export default SignUp
