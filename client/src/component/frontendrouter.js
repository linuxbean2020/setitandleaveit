import React, { Component } from 'react';
import {  Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Header from './header/header';
import Footer from './footer/footer';
import Home from './home/home';
import Traditional from './traditional/traditional';
import SetItAndLeaveIt from './set-it-and-leave-it/set-it-and-leave-it';
import Video from './video/video';
import Service from './service/service';
import MockupTool from './tools/tool';
import AboutUs from './aboutus/about';
import Contactus from './contactus/contactus';
import FAQ from './faq/faq';
import Signup from './signup/signup';
import Profile from './profile/profile';
class Frontendrouters extends Component{
   constructor(props){
       super(props);
       this.state ={
           open:false
       }
   }



    render(){
        return(
                   <div className="frontendrouter-section">
                      
                        <Header />
                            <div>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                
                                <Route  path="/front/traditional" component={Traditional} />
                                <Route  path="/front/set-it-and-leave-it" component={SetItAndLeaveIt} />
                                <Route  path="/front/video" component={Video} />
                                <Route  path="/front/service" component={Service} />
                                <Route  path="/front/tools" component={MockupTool} />
                                <Route  path="/front/about" component={AboutUs} />
                                <Route  path="/front/contactus" component={Contactus} />
                                <Route  path="/front/faq" component={FAQ} />
                                {/* <Route exact path="/ComponentToPrint" component={ComponentToPrint} /> */}
                                <Route  path="/front/signup" component={Signup} />
                                <Route  path="/front/profile" component={Profile} />
                                {/* <Route exact path="/admin/Dashboard" component={AdminDashboard} /> */}
                                <Route exact path="/front" component={Home} />
                            </Switch>
                            </div>
                            <Footer />
                       
                   </div>
        );
  }
}

export default Frontendrouters;
