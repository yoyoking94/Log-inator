/* eslint-disable react/prop-types */
import /* React,  */ { Component } from 'react'

import './input.css'

export default class input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordShown: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleChange = (e) => {
        this.props.onInputChange(e.target.value)
    };

    handleToggle() {
        this.setState((prevState) => ({
            passwordShown: !prevState.passwordShown
        }));
    }

    render() {
        const { span, icon1, icon2, alt1, alt2, type, name, id } = this.props

        return (
            <div className='inputMail'>
                <label>
                    <span>{span}</span>
                    <div>
                        <img src={icon1} alt={alt1} />
                        <input type={this.state.passwordShown ? type : "password"} name={name} id={id} value={this.props.value} onChange={this.props.onChange} />
                        <img src={icon2} alt={alt2} onClick={this.handleToggle} className='lock' />
                    </div>
                </label>
            </div>
        )
    }
}
