import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class NavigationItem extends Component {

render() {
    let modifier; 
    if(this.props.title.toLowerCase()==="signup"){
        modifier = 'Navigation__item--emphasis';
    }
    return ( 
        <Link to={this.props.url}><li className={`Navigation__item ${modifier}`}>{this.props.title}</li></Link>
    );
  }
}

export default NavigationItem;
