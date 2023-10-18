/* eslint-disable react/prop-types */
import /* React,  */ { Component } from 'react'

import './input.css'

export default class input extends Component {
    render() {
        const { span, icon, alt, type, name, id } = this.props

        return (
            <div className='inputMail'>
                <label>
                    <span>{span}</span>
                    <div>
                        <img src={icon} alt={alt} />
                        <input type={type} name={name} id={id} />
                    </div>
                </label>
            </div>
        )
    }
}
