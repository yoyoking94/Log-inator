/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import /* React, */ { Component } from 'react'
import { Link } from 'react-router-dom'


/* Import components */
import Input from '../input/input'
/* import Password from '../input/password' */

/* Import css */
import './form.css'

/* Import icons */
import Facebook from '../../assets/facebook.svg'
import Apple from '../../assets/apple.svg'
import Google from '../../assets/google.svg'
import Message from '../../assets/message.svg'
import Padlock from '../../assets/padlock.svg'
import Invisible from '../../assets/invisible.svg'
import User from '../../assets/user.svg'

export default class form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ``,
            username: ``,
            password: ``,
            confirmPassword: ``,
            rememberMe: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event, inputName) => {
        /* console.log(this.state); */
        this.setState({
            [inputName]: event.target.value,
        });
    }

    handleSubmit = () => {
        if (this.props.signIn === false) {
            console.log(`Input email value: ${this.state.email}`);
            console.log(`Input password value: ${this.state.password}`);
            console.log(`Input remember value: ${this.state.rememberMe}`);
        } else if (this.props.signIn === true) {
            console.log(`Input email value: ${this.state.email}`);
            console.log(`Input user value: ${this.state.username}`);
            console.log(`Input password value: ${this.state.password}`);
            console.log(`Input confirmPassword value: ${this.state.confirmPassword}`);
        }
    }

    render() {
        const { title, negation, log, password, login, btn } = this.props

        return (
            <div className='form'>
                <div className='title'>{title}</div>
                <div className='subtitle'>
                    <span>If you {negation} have an account register <br />You can &nbsp;
                        {this.props.signIn === true &&
                            <Link to="/SignUp" className='register'>{log} here !</Link>
                        }
                        {this.props.signIn === false &&
                            <Link to="/" className='register'>{log} here !</Link>
                        }
                    </span>
                </div>
                <Input icon1={Message} alt1={'email icon'} type={'email'} name={'email'} id={'email'} span={'Email'} value={this.state.email} onChange={(e) => this.handleChange(e, "email")} />
                {this.props.signIn === false &&
                    <Input icon1={User} alt1={'email icon'} type={'text'} name={'username'} id={'username'} span={'Username'} value={this.state.username} onChange={(e) => this.handleChange(e, "username")} />
                }
                <Input icon1={Padlock} icon2={Invisible} alt1={'padlock icon'} alt={"show password icon"} type={'password'} name={'password'} id={'password'} span={'Password'} value={this.state.password} onChange={(e) => this.handleChange(e, "password")} />
                {this.props.signIn === false &&
                    <Input icon1={Padlock} icon2={Invisible} alt1={'padlock icon'} alt={"show password icon"} type={'password'} name={'confirmPassword'} id={'confirmPassword'} span={'Confirm password'} value={this.state.confirmPassword} onChange={(e) => this.handleChange(e, "confirmPassword")} />
                }
                {this.props.signIn === true &&
                    <div className='inputCheckbox'>
                        <label>
                            <input type="checkbox" name="rememberMe" id="rememberMe" onClick={() => this.setState({ rememberMe: !this.state.rememberMe })} />
                            <span>Remember me</span>
                        </label>
                    </div>
                }
                <div className='btn'>
                    <button onClick={this.handleSubmit}>{btn}</button>
                </div>
                {this.props.signIn === true &&
                    <>
                        <div className='continue'>or continue with</div>
                        <div className='icons'>
                            <img src={Facebook} alt="Facebook icon" />
                            <img src={Apple} alt="Apple icon" />
                            <img src={Google} alt="Google icon" />
                        </div>
                    </>
                }

            </div>
        )
    }
}
