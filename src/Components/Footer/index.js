import React, { Component } from 'react';
import './Footer.scss';
import FooterItem from './FooterItem';

class Footer extends Component {

  render() {

    let FooterList; 
    
    if(this.props.footerItems){
      FooterList = this.props.footerItems.map( footer => {
        return <FooterItem key={footer.label} title={footer.label} url={footer.path} />
      })
    }
    
    return (
          <ul className="Footer">
           {FooterList}
          </ul>
    );
  }
}

export default Footer;
