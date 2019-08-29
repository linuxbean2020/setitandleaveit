import React, { Component } from 'react';
import {withRouter, BrowserRouter as Router } from 'react-router-dom'
import UserService from '../../reactservice/UserService'
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const API = new UserService();
class Profile extends Component{
    
   constructor(props){
        let fields1=API.getProfile();
        let fields2=API.getProfile().data;
        let newFields;
        if(fields1.data){
            newFields=fields2;
        }else{
            newFields=fields1;
        }
        // console.log('f1:',fields1);
        // console.log('f2:',fields2);
       super(props);
       this.state ={
           open:false,
           fields:newFields,          
           errors: {},
           showAlert:false
       };
       this.profileupdate = this.profileupdate.bind(this);
   }

// componentDidUpdate(){
//     console.log('wiiilllllll',API.loggedIn());
//     if (!API.loggedIn()){
//         this.props.history.replace('/signup');
//     }else{
//         API.getProfile();
//         // this.setState({
//         //     fields:API.getProfile().data
//         // });        
//        console.log('d:', API.getProfile());  
//        console.log('f:',this.state.fields);    
//     }
// } 

// componentDidMount() {      
//     if (!API.loggedIn()){
//         this.props.history.replace('/signup');
//     }else{
//         API.getProfile();
//         this.setState({
//             fields:API.getProfile().data
//         });        
//     //    console.log('d:', API.getProfile());      
//     }
// }

updateMevalidationCheck(){
    // console.log('222222222');
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

   if(!this.refs.name.value){
       formIsValid = false;
       errors["name"] = "error_sell form-control";
   }
   if(!this.refs.email.value){
    formIsValid = false;
    errors["email"] = "error_sell form-control";
   }
   if(this.refs.email.value){
    if (reg.test(this.refs.email.value) === false){
     formIsValid = false;
     errors["email"] = "error_sell form-control";
    }
   }
   
    this.setState({errors:errors});
    return formIsValid;
}



profileupdate(){   
    if(this.updateMevalidationCheck()){ 
        const userInfoVo ={
            'name': this.refs.name.value,
            'email': this.refs.email.value,
            'username': this.refs.username.value,
            'id': this.refs.id.value
        }

        API.updateProfileUser(userInfoVo)
        .then((result) => {
            if(result.data.success){
                // console.log('xxx res:', result );
                //this.resetForm();
                this.setState({
                    showAlert:true,
                    color:'green',
                    message: result.data.message
                });
            }else{
                // console.log('xxx errocode:', result );
                this.setState({
                    showAlert:true,
                    color:'#b31313d6',
                    message: result.data.message
                });
    
            } 
        }).catch(err => {
            // console.log('xxx new:', err);
        }) 
    }
}

updateMehandleChange(field, e) {  
    let fields = this.state.fields;
    fields[field] = e.target.value;    
    this.setState({ fields });
    // console.log('updatefields..xx...xx:', fields);
}

logout = () => {
    API.logout();
    this.props.history.replace('/front/signup');
}


render(){
        // console.log('f:',this.state.fields);
        return(
                   <div className="profile-section">        
                    <section id="dashboard-main">
                        <div className="container">
                            {/* <div class="t3-breadcrumbs">
                                <ul class="breadcrumb">
                                    <li><a href="index.html" class="pathway">Home</a><span class="divider"></span></li>
                                    <li class="active"><span>Contact</span></li>

                                </ul>
                            </div> */}
                            
                            <h2 style={{textAlign:'center'}}>My Account</h2>
                            
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-4">
                                    <nav className="woocommerce-MyAccount-navigation left_panels">
                                        <ul>
                                            <li className="is-active">
                                                <a href="dashboard.html"><i className="fa fa-user-circle aj_fa" aria-hidden="true"></i>My details</a>
                                            </li>
                                            <li className="is-active">
                                                <a href="javascript:void(0)" onClick={this.logout.bind(this)}><i className="fa fa-address-book aj_fa" aria-hidden="true"></i>Logout</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                
                                <div className="col-lg-9 col-md-9 col-sm-8">
                                    <div className="dashboard-content">
                                        {/* <h3>My details</h3> */}
                                        <div className="row dashboard-content-inner">
                                            <h5>Personal Information</h5>
                                            {/* <div class="col-lg-4 col-md-4 col-sm-12">
                                                <p>Aenean massa Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                            </div> */}

                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                            { this.state.showAlert	? (<div style={{background:this.state.color}} className="Idmessage">{this.state.message}</div>) : '' }
                                        
                                                <form className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label>Name</label>
                                                            <input type="text" ref="name" className={this.state.errors["name"] ? this.state.errors["name"] : 'form-control'} name="name" placeholder="Name" onChange={this.updateMehandleChange.bind(this, "name")}  defaultValue={this.state.fields.name}/>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label>Email</label>
                                                            <input type="text" readOnly ref="email" className={this.state.errors["email"] ? this.state.errors["email"] : 'form-control'} name="email" placeholder="email" onChange={this.updateMehandleChange.bind(this, "email")} defaultValue={this.state.fields.email}/>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label>Username</label>
                                                            <input type="text" readOnly ref="username" className="form-control" name="username" onChange={this.updateMehandleChange.bind(this, "username")} defaultValue={this.state.fields.username}/>
                                                        </div>
                                                    </div>

                                                    <input type="hidden" ref="id" className="form-control" name="id" onChange={this.updateMehandleChange.bind(this, "id")} defaultValue={this.state.fields._id}/>

                                                    
                                                    {/* <div class="col-md-6 col-sm-12">
                                                        <div class="form-group">

                                                        </div>
                                                    </div> */}

                                                    <div className="col-md-6 col-sm-12">
                                                        <input type="button" onClick={this.profileupdate} className="light-btn" value="Save" style={{background:'#7030a0', borderColor: '#7030a0' }}/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        
                                        {/* <div class="row dashboard-content-inner">
                                            <h5>E-mail address</h5>
                                            <div class="col-lg-4 col-md-4 col-sm-12">
                                                <p>Aenean massa Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                            </div>

                                            <div class="col-lg-8 col-md-8 col-sm-12">
                                                <form action="index.html" method="post">
                                                    <div class="col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label>Email address</label>
                                                            <input type="email" class="form-control" name="email" placeholder="Subject" required="" value="roler.example@gmail.com"/>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                   </div>
        );
  }
}

export default withRouter (Profile);
