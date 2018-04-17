import React, { Component } from 'react';
import './Navigation.scss';
import NavigationItem from './NavigationItem.js';

class Navigation extends Component {

  render() {

    let NavList; 
    
    if(this.props.navItems){
      NavList = this.props.navItems.map( nav => {
        return <NavigationItem key={nav.label} title={nav.label} url={nav.path} />
      })
    }
    
    return (
          <ul className="Navigation">
           {NavList}
          </ul>
    );
  }
}

export default Navigation;
