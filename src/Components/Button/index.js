import React, {Component} from 'react';
import './Button.scss';
class Button extends Component {

    render() {
        let theme = (this.props.theme)? this.props.theme : 'light';
        let modifier = (theme==='dark')? 'Button--dark':'Button--light';
        return (
            <button className={`Button ${modifier}`}>{this.props.text}</button>
        )
    }
}

export default Button