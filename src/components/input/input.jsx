/* eslint-disable react/prop-types */
import /* React,  */ { Component } from 'react'

import './input.css'

export default class input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: this.props.email,
            username: this.props.username,
            password: this.props.password,
            confirmPassword: this.props.confirmPassword,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if (name === "email") {
            this.setState.email(e.target.value)
            this.setState({ email: e.target.value })
            console.log("email : " + this.state.email);
        } else if (name === "username") {
            console.log("username : " + this.state.username);
            this.setState.username(e.target.value)
        } else if (name === "password") {
            console.log("password : " + this.state.password);
            this.setState.password(e.target.value)
        } else if (name === "confirmPassword") {
            console.log("confirmPassword : " + this.state.confirmPassword);
            this.setState.confirmPassword(e.target.value)
        }
    }
    render() {
        const { span, icon1, icon2, alt1, alt2, type, name, id } = this.props

        return (
            <div className='inputMail'>
                <label>
                    <span>{span}</span>
                    <div>
                        <img src={icon1} alt={alt1} />
                        <input type={type} name={name} id={id} onChange={this.handleChange} />
                        <img src={icon2} alt={alt2} />
                    </div>
                </label>
            </div>
        )
    }
}
