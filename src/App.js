import React, { Component } from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Configuration from './Config/configuration'
import Request from './Services/request'
/* Components */ 
import {
  Navigation,
  Footer,
  Form } from './Components';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      pageContent: {
        navigation: [],
        footer: [],
        signup: [],
        login: [],
        forgot: [],
        contact: [],
        bonus: []
      }
    }
  }

  componentDidMount() {
   

   
  }


  render() {  
   

    return (
      <Router>
          <div className="App">
            <header className="App-header">
            <Link to="/"><img src="images/-logo.png" alt={Configuration.companyName} className="App-logo" /></Link>
             
            <Navigation navItems={this.state.pageContent.navigation} /> 
            </header>

            <div className="App__container">

              <Route
                path='/'
                exact
                render={(props) =>   
                  <div>
                   homepage 
                    </div> }/>

              <Route
                path='/about'
                render={(props) => 
                  <div>
                    <h1>About</h1>
                  </div> } />
 
              <Route
              path='/contact-us'
              render={(props) => 
                <Form 
                  inputItems={[{description:'Enter your email',placeholder:'email@email.com',inputType:'text'}]} 
                  title="Contact Us"
                  buttonText="submit" 
                  helperText="Have questions?" 
                  helperLinkText="Read FAQs" /> } />
         
              <Route
                path='/signup'
                render={(props) => 
                  <Form 
                    inputItems={[{description:'Enter your username',placeholder:'email@email.com',inputType:'text'}]}
                    title="signup"  
                    buttonText="Register"
                    helperText="Already have an account?" 
                    helperLinkText="Login" /> } />

              <Route
                path='/login'
                render={(props)  =>  
                  <Form 
                    inputItems={[{description:'Enter your username',placeholder:'email@email.com',inputType:'text'}]}
                    title="Login"  
                    buttonText="Login"
                    helperText="Forgot your password?" 
                    helperLinkText="We can help" /> }/>

              <Route
                path='/forgot'
                render={(props) =>  
                  <Form inputItems={[{description:'Enter your email',placeholder:'email@email.com',inputType:'text'}]}  
                            title="Forgot Password"  
                            buttonText='help'
                            helperText="Don't have an account?" 
                            helperLinkText="Create an Account" /> } />
           
            </div>
          <Footer footerItems={this.state.pageContent.footer} />
          </div>
      </Router>
    );

  }
}

export default App;

