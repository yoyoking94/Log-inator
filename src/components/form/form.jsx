/* eslint-disable react/prop-types */
import /* React, */ { Component } from 'react'

import Input from '../input/input'
import Password from '../input/password'
import SignUp from '../../pages/signUp/signUp'

import './form.css'

import Facebook from '../../assets/facebook.svg'
import Apple from '../../assets/apple.svg'
import Google from '../../assets/google.svg'

import Message from '../../assets/message.svg'
import Padlock from '../../assets/padlock.svg'
import Invisible from '../../assets/invisible.svg'

export default class form extends Component {
    render() {
        const { title, negation, log } = this.props
        return (
            <div className='form'>
                <div className='title'>{title}</div>
                <div className='subtitle'>
                    <span>If you {negation} have an account register <br />You can &nbsp;<span className='register' onClick={() => window.location.replace(<SignUp />)}>{log} here !</span></span>
                </div>
                <Input icon={Message} alt1={'email icon'} type={'text'} name={'email'} id={'email'} />
                <Password icon1={Padlock} icon2={Invisible} alt1={'padlock icon'} alt={"show password icon"} type={'password'} name={'password'} id={'password'} />
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
