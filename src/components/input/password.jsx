/* eslint-disable react/prop-types */
import /* React, */ { Component } from 'react'

export default class password extends Component {
    render() {
        const { span, icon1, icon2, alt1, alt2, type, name, id } = this.props

        return (
            <div className='inputMail'>
                <label>
                    <span>{span}</span>
                    <div>
                        <img src={icon1} alt={alt1} />
                        <input type={type} name={name} id={id} />
                        <img src={icon2} alt={alt2} />
                    </div>
                </label>
            </div>
        )
    }
}
