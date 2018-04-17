import React, {Component} from 'react';
import './form.scss'
import Input from '../Input'; 
import Button from '../Button'

class Form extends Component {
    constructor(prop){
        super(prop)
    }
    render(){

        let InputList; 
    
        if(this.props.inputItems){
            InputList = this.props.inputItems.map( input => {
            return (
                 <div className="Form__row">
                        <Input description={input.description}
                                   placeholder={input.placeholder}
                                   type={input.inputType} />   
                 </div>
            )
        })
    }
    
        return (
            <div className="Form__container">
                <div className="Form__template">
                    <div className="Form__title">
                        {this.props.title}
                    </div>
                    {InputList}
                    <div className="Form__button">
                        <Button text={this.props.buttonText} theme="dark"></Button>
                    </div>
                </div>
                <div className="Helper__container">
                    <span className="Helper__text"> {this.props.helperText}</span><span className="Helper__action">{this.props.helperLinkText}</span>
                </div> 
            </div>
        )
    }
}

export default Form