import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import logo from '../../assets/img/logo1.png';
class Footer extends Component{
   constructor(props){
       super(props);
       this.state ={
           isHide:false
       }
   }

       
    render(){
        return(
        <div className="footer-section">  

            
    <section id="get-started-main">
        <div className="container">
            <div className="row">
                <div className="get-started-inner">
                    <div className="col-md-8 col-sm-8">
                        <div className="get-started-heading">
                            <h2>Get Started Now!</h2>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                        <div className="get-started-heading">
                            <a href="#">Signup</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
            <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <div className="footer-logo">
                            <img src={logo}/>
                        </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-5">
                        <div className="customfooter_contacts">
                            <h4>Contact</h4>
                            <p><i className="fa fa-phone" aria-hidden="true"></i> <a href="tel:18669005050">1-866-900-5050</a></p>
                            
                            <p><i className="fa fa-envelope" aria-hidden="true"></i> <a href="mailto: info@SetItandLeaveIt.com">info@SetItandLeaveIt.com</a></p>
                            
                            <p><i className="fa fa-globe" aria-hidden="true"></i> <a href="www.SetItandLeaveIt.com">www.SetItandLeaveIt.com</a></p>
                    
                        </div>

                    </div>
                    
                    <div className="col-sm-3 col-md-4">
                        <h4>Links</h4>
                        <div className="useful-links">
                            <ul>
                                <li><a href="#">SITEMAP</a></li>
                                <li><a href="#">PRIVACY</a></li>
                                <li><a href="#">TERMS OF SERVICE</a></li>
                                <li><a href="#">DISCLAIMER</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </div>

            );
        }
      }
      
      export default Footer;