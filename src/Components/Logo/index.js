import React, {Component} from 'react';
import Configuration from '../../Config/configuration';
import './Logo.scss';
class Logo extends Component {
    constructor(props){
        super(props)
        this.state = {
            defaultTheme: 'light'
        }
    }

    render(){
        const imgTheme = (this.props.theme) ? this.props.theme : this.state.defaultTheme; 
        return (<img src={`images/react.png`} alt={`${Configuration.companyName} Logo`} className="Logo" />)
    }
}

export default Logo