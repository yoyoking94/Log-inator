import /* React, */ { Component } from 'react'

import './form.css'

import Facebook from '../../assets/facebook.svg'
import Apple from '../../assets/apple.svg'
import Google from '../../assets/google.svg'

export default class form extends Component {
    render() {
        return (
            <div className='form'>
                <div className='title'>Sign in</div>
                <div className='subtitle'>
                    <span>If you don’t have an account register <br />You can  <span className='register'>Register here !</span></span>
                </div>
                <div className='inputMail'>
                    <label>
                        <span>Email</span>
                        <input type="text" name="email" id="email" />
                    </label>
                </div>
                <div className='inputPassword'>
                    <label>
                        <span>password</span>
                        <input type="password" name="password" id="password" />
                    </label>
                </div>
                <div className='inputCheckbox'>
                    <label>
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <span>Remember me</span>
                    </label>
                    <span>Forgot Password ?</span>
                </div>
                <div className='btn'>
                    <button>Login</button>
                </div>
                <div className='continue'>or continue with</div>
                <div className='icons'>
                    <img src={Facebook} alt="Facebook icon" />
                    <img src={Apple} alt="Apple icon" />
                    <img src={Google} alt="Google icon" />
                </div>
            </div>
        )
    }
}
