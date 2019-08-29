import React, { Component } from 'react';
import { Link, withRouter, BrowserRouter as Router } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import '../../assets/css/style.css'
import '../../assets/css/my-custom.css';
import '../../assets/css/responsive.css';
import logo from '../../assets/img/logo1.png';
import UserService from '../../reactservice/UserService';
const API = new UserService();
class Header extends Component{
   constructor(props){
       super(props);
       this.state ={
           open:false,
           openSubmenu1:false,
           openSubmenu2:false,
           dropdownOpen: false
       }
       this.toggleClass = this.toggleClass.bind(this);
       this.toggleClassSubmenu1 = this.toggleClassSubmenu1.bind(this);
       this.toggleClassSubmenu2 = this.toggleClassSubmenu2.bind(this);
   }

   toggleClass() {
    const currentState = this.state.open;
    this.setState({ 
        open: !currentState
     });
  };

  toggleClassSubmenu1(){
    const currentState = this.state.openSubmenu1;
    this.setState({ 
        openSubmenu1: !currentState
     });
  } 
    toggleClassSubmenu2(){
        const currentState = this.state.openSubmenu2;
        this.setState({ 
            openSubmenu2: !currentState
    });

  }
 


componentDidMount() {
    // let menuitem;
    // if (!API.getProfile().role == '0'){
    //       menuitem = '<Dropdown.Item href="/admin">Sign-up</Dropdown.Item>';
    // }

}

logout = () => {
    API.logout();
    this.props.history.replace('/front/signup');
}

    render(){
        return(
                   <div className="header-section">
                        <div id="fl_menu">
                            <ul>
                            {!API.loggedIn() ? (<li><Link to="/front/signup" style={{background: '#7030a0'}}>SIGN-UP</Link></li>) :'' }
                                <li><Link to="/front/traditional" style={{background: '#31859c'}}>LEARN</Link></li>
                                <li><Link to="/front/video" style={{background: '#e46c0a'}} >VIDEOS</Link></li>
                                <li><Link to="/front/contactus" style={{background: '#d99694'}} >CONTACT</Link></li>
                            </ul>
                        </div>

                        <div className="topheader">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="top-bar-links clearfix pull-right">
                                                <ul className="top-bar-acc">
                                                    <li className="top-bar-link"><i className="fa fa-phone"></i> <a href="#">1 (866) 900-5050</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>  

                                        
                    <header className="navigation" id="sticky-nav">
                        <div className="container-fluid">
                            <div className="top-logo">
                                <Link to={"/"}><img src={logo}/></Link>
                            </div>
                            <nav id='cssmenu' className="navigation">
                                <div id="head-mobile"></div>
                                <div onClick={this.toggleClass}  className={`button ${this.state.open ? 'menu-opened' : ''}`}></div>

                                <ul className={`nav ${this.state.open ? 'open' : ''}`} style={{ display: this.state.open ? 'block' : '' }}>
                                    <li className="active"><Link to={"/front"} >Home</Link></li>

                                    <li className="has-sub">
                                        <span onClick={this.toggleClassSubmenu1} className={`submenu-button ${this.state.openSubmenu1 ? 'submenu-opened' : ''}`}></span>
                                            <a href="traditional">Learn</a>
                                        <ul className={`sub-menu ${this.state.openSubmenu1 ? 'open' : ''}`} style={{ display: this.state.openSubmenu1 ? 'block' : '' }}>
                                            <li><Link to="/front/traditional">TRADITIONAL</Link></li>
                                            <li><Link to="/front/set-it-and-leave-it">SET IT AND LEAVE IT</Link></li>
                                            <li><Link to="/front/video">VIDEOS</Link></li>
                                        </ul>
                                    </li>
                                    
                                    <li className="has-sub">
                                    <span onClick={this.toggleClassSubmenu2} className={`submenu-button ${this.state.openSubmenu2 ? 'submenu-opened' : ''}`}></span>
                                        <a href="#">Tool</a>
                                        <ul className={`sub-menu ${this.state.openSubmenu2 ? 'open' : ''}`} style={{ display: this.state.openSubmenu2 ? 'block' : '' }}>
                                        {API.loggedIn() ? (<li><Link to="/front/tools">Tool</Link></li>) : ''}
                                            <li><Link to="/front/faq">FAQ</Link></li>
                                        </ul>
                                    </li>
                                    
                                    <li><Link to="/front/service">Services</Link></li>
                                    <li><Link to="/front/about">About</Link></li>
                                    <li><Link to="/front/contactus">Contact</Link></li>

                                 
                                </ul>
                            </nav>
                            
                            <ul className="my-account-link">
                            
                           
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <i className="fa fa-user"></i>&nbsp;&nbsp;Account
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {!API.loggedIn() ? (<Dropdown.Item href="/front/signup">Sign-up</Dropdown.Item>) : ''}
                                {API.loggedIn() ? (<Dropdown.Item href="/front/profile">Profile</Dropdown.Item>) : ''}
                                {API.loggedIn() ? (<Dropdown.Item href="javascript:void(0)" onClick={this.logout.bind(this)} >Logout</Dropdown.Item>) : '' }
                                   
                            </Dropdown.Menu>
                            </Dropdown>


                           
                            </ul>
                        </div>
                    </header>

                   </div>
        );
  }
}

export default withRouter (Header);
