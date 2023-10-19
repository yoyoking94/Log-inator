/* eslint-disable react/prop-types */
import /* React, */ { Component } from 'react'

import Lovis from '../../assets/lovis.svg'
import './aside.css'

export default class aside extends Component {
    render() {
        const { span } = this.props
        return (
            <div className='aside'>
                <div>
                    <img src={Lovis} alt="lovis the worker" />
                </div>
                <div className='asideTitle'>
                    <span>Sign {span} into Prout</span>
                    <span>Lorem Ipsum is simply </span>
                </div>
            </div>
        )
    }
}
