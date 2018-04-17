import React, {Component} from 'react';
import Button from '../Button';
import './Input.scss';

class Input extends Component {
    render(){
        const button = this.props.buttonText ? (<Button text={this.props.buttonText} theme="dark">{this.props.buttonText}</Button>):('');
        const modifier = this.props.buttonText ? ('Input__item--withButton'):('');
        let inputType = 'text';
        if(this.props.type) inputType= this.props.type; 
        return (
            <div className="Input__container">
                <div className="Input__description">{this.props.description}</div>
                <div className="Input__subcontainer">
                    <input  className={`Input__item ${modifier}`} placeholder={this.props.placeholder} type={inputType} />
                    <span className="Input__button">{button}</span>
                </div>
            </div>
        )
    }

}

export default Input;