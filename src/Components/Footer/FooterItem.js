import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class FooterItem extends Component {

render() {
    return ( 
         <Link to={this.props.url}><li className="Footer__item">{this.props.title}</li></Link>
    );
  }
}

export default FooterItem;
