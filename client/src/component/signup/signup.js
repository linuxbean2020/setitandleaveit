import React, { Component } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import UserService from '../../reactservice/UserService'
const API = new UserService();
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const recaptchaRef = React.createRef();
class Signup extends Component{
    constructor(props){
        super(props);
        this.state ={
            open:false,
            signinform:false,
            fields: [], 
            loginfields: [],            
            errors: {},
            showAlert:false,
            loginshowAlert:false
        }
        this.toggleClass = this.toggleClass.bind(this);
        this.FormtoggleClass = this.FormtoggleClass.bind(this);
        this.registerMe = this.registerMe.bind(this);
        this.registerSubscribe = this.registerSubscribe.bind(this);
        this.LoginMe = this.LoginMe.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.LoginMevalidationCheck = this.LoginMevalidationCheck.bind(this);
}


onSubmit = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    this.props.onSubmit(recaptchaValue);
    }

toggleClass() {
    const currentState = this.state.open;
    this.setState({ 
         open: !currentState
    });
};

FormtoggleClass() {
    const currentStates = this.state.signinform;
    this.setState({ 
        signinform: !currentStates
    });
};

resetForm(){
   this.setState({ fields:[] });

}


LoginMevalidationCheck(){
    let loginfields = this.state.loginfields;
    let errors = {};
    let formIsValid = true;

   if(!loginfields["loginemail"]){
     formIsValid = false;
     errors["loginemail"] = "error_sell form-control";
   }
   if(loginfields["loginemail"]){
         if (reg.test(loginfields["loginemail"]) === false){
             formIsValid = false;
             errors["loginemail"] = "error_sell form-control";
         }
   }  

   if(!loginfields["loginpassword"]){
        formIsValid = false;
        errors["loginpassword"] = "error_sell form-control";
   }

   this.setState({errors:errors});
   return formIsValid;

}


LoginMe(e){
    if(this.LoginMevalidationCheck()){ 
    const userInfoVo = {
        'email': this.state.loginfields.loginemail,
        'password': this.state.loginfields.loginpassword
    }
   // console.log('xxxxxxxxxxxx login', userInfoVo);
    API.login(userInfoVo)
        .then((result) => {
           // console.log('xxx ', result);
         if(result.data.success == true){
           if( result.data.role == 0){
                this.props.history.replace('/admin/dashboard');
           }else{
                this.props.history.replace('/front/profile');
           }
        }else{
                //console.log('message:', result.data.message);
                this.setState({
                    loginshowAlert:true,
                    color:'#b31313d6',
                    message: result.data.message
                });
        }

        }).catch(err => {
            console.log('xxx', err);
        })
    } 
}

registerMevalidationCheck(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

   if(!fields["name"]){
       formIsValid = false;
       errors["name"] = "error_sell form-control";
   }
   if(!fields["email"]){
    formIsValid = false;
    errors["email"] = "error_sell form-control";
   }
   if(fields["email"]){
         if (reg.test(fields["email"]) === false){
          formIsValid = false;
          errors["email"] = "error_sell form-control";
         }
   }  
   if(!fields["username"]){
    formIsValid = false;
    errors["username"] = "error_sell form-control";
   }
   if(!fields["password"]){
    formIsValid = false;
    errors["password"] = "error_sell form-control";
   }
   if(!fields["cpassword"]){
    formIsValid = false;
    errors["cpassword"] = "error_sell form-control";
   }

   if(fields["password"] != fields["cpassword"]){
        formIsValid = false;
        errors["cpassword"] = "error_sell form-control";
        errors["password"] = "error_sell form-control";
   }

   if(!fields["investor"]){
    formIsValid = false;
    errors["investor"] = "error_sell";
   }
   if(!fields["financial"]){
    formIsValid = false;
    errors["financial"] = "error_sell";
   }
   if(!fields["professor"]){
    formIsValid = false;
    errors["professor"] = "error_sell";
   }

   if(fields["other"]){
      if(!fields["tell_us_more"]){
        formIsValid = false;
        errors["tell_us_more"] = "error_sell form-control other-input";
       }
   }else if(fields["tell_us_more"]){
       if(!fields["other"]){
            formIsValid = false;
            errors["other"] = "error_sell";
       }
   }
   
   
   if(!fields["terms"]){
    formIsValid = false;
    errors["terms"] = "error_sell";
   }

    this.setState({errors:errors});
    return formIsValid;
    
}


registerSubscribevalidationCheck(){

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

   if(!fields["name"]){
       formIsValid = false;
       errors["name"] = "error_sell form-control";
   }
   if(!fields["email"]){
    formIsValid = false;
    errors["email"] = "error_sell form-control";
   }
   if(fields["email"]){
    if (reg.test(fields["email"]) === false){
     formIsValid = false;
     errors["email"] = "error_sell form-control";
    }
   } 
    this.setState({errors:errors});
    return formIsValid;

}


registerMe(e){
    if(this.registerMevalidationCheck()){ 
        const userInfoVo ={
            'name': this.state.fields.name,
            'email': this.state.fields.email,
            'username': this.state.fields.username,
            'password': this.state.fields.password,
            'investor': this.state.fields.investor,
            'financial': this.state.fields.financial,
            'professor': this.state.fields.professor,
            'other': this.state.fields.other,
            'tell_us_more': this.state.fields.tell_us_more,
            'role': this.refs.role.value,
            'datetime':new Date()
        }
        API.registerUser(userInfoVo)
        .then((result) => {


            if(result.data.success){
                console.log('xxx res:', result );
                this.resetForm();
                this.setState({
                    showAlert:true,
                    color:'green',
                    message: result.data.message
                });
            }else{
    
                console.log('xxx errocode:', result );
                this.setState({
                    showAlert:true,
                    color:'#b31313d6',
                    message: result.data.message
                });
    
            } 

        }).catch(err => {
            console.log('xxx new:', err);
        }) 
    }
}


registerSubscribe(){
    if(this.registerSubscribevalidationCheck()){ 
        let  password = Math.random().toString(36).slice(-8); 
        let username = this.state.fields.email.split("@");                 
        const userInfoVo ={
            'name': this.state.fields.name,
            'email': this.state.fields.email,
            'role': this.refs.role.value,
            'password': password,
            'username': username[0],
            'datetime':new Date()
        }
        API.registerUser(userInfoVo)
        .then((result) => {

        if(result.data.success){
            console.log('xxx res:', result );
            this.resetForm();
            this.setState({
                showAlert:true,
                color:'green',
                message: result.data.message
            });
        }else{

            console.log('xxx errocode:', result );
            this.setState({
                showAlert:true,
                color:'#b31313d6',
                message: result.data.message
            });

        } 

        }).catch(err => { 
            console.log('xxx', err);
        }) 
   }
}


registerMehandleChange(field, e) { 
    let fields = this.state.fields;
    fields[field] = e.target.value;    
    this.setState({ fields });
    console.log('Registerfields..xx...xx:', fields);
}


loginMehandleChange(field, e) { 
    let loginfields = this.state.loginfields;
    loginfields[field] = e.target.value;    
    this.setState({ loginfields });
    console.log('loginfields..xx...xx:', loginfields);
}

// registerSubscribehandleChange(field, e) { 
//     let fields = this.state.fields;
//     fields[field] = e.target.value;
//     this.setState({ fields });
//     console.log('Subscribefields..xx...xx:', fields);
// }



render(){

    //console.log('Helloref:',this.refs.name.value);
         return(
                    <div className="signup-section">
                        <section id="inner-page-banner">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="inner-page-banner-heading hdng">
                                        <h2> Account </h2>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="blouq-content">
                            <div className="container">
                                <div className="blouq-content-inner">
                                    <h5>Sign-up below to get on our email list or access the <em> Set is and Leave it </em>  tool</h5>
                                </div>
                            </div>
                        </section>

                        <section id="account-main">
                            <div className="container">
                                <div id="form-tab">
                                    <input id="page1" type="radio" name="screens" checked/>
                                    <div className={`screen  ${!this.state.signinform ? 'show' : 'hide'}`}>
                                        <div className="account-form-heading">
                                            <h2>Sign-Up</h2>
                                            <p>Already a member? &nbsp; 
                                                <label onClick={this.FormtoggleClass} className="label-link" for="page2">Sign-in here</label>
                                            </p>
                                        </div>

                                        { this.state.showAlert	? (<div style={{background:this.state.color}} className="Idmessage">{this.state.message}</div>) : '' }
                                        
                                        <div className="account-form-content">
                                           <form>
                                            <div className="account-form-content-top">
                                                    <input  name="role" ref="role" defaultValue="1"  onChange={this.registerMehandleChange.bind(this, "role")} type="hidden"  placeholder="role"/> 
                                                    
                                                    <div className="form-group">
                                                        <input  name="name"  value={this.state.fields["name"] ? this.state.fields["name"] :'' } onChange={this.registerMehandleChange.bind(this, "name")} type="name" className={this.state.errors["name"] ? this.state.errors["name"] : 'form-control'}  placeholder="Name"/>
                                                    </div>

                                                    <div className="form-group">
                                                        <input name="email"   value={this.state.fields["email"] ? this.state.fields["email"] : ''} onChange={this.registerMehandleChange.bind(this, "email")} type="email" className={this.state.errors["email"] ? this.state.errors["email"] : 'form-control'}    placeholder="Email"/>
                                                       
                                                    </div>
                                                    
                                                    <div className="form-group">
                                                        <input onClick={this.toggleClass}  type="checkbox" id="test2" value="red"/>
                                                        <label for="test2" className="inner-label">I want to use the tool</label>
                                                    </div>
{/* 
    <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6LePr68UAAAAAA85wRA1fgXOh2pSKbojFpqhZLcL"
        
      /> */}

                                                    {!this.state.open ? (<button type="button" onClick={this.registerSubscribe} className="btn">GO</button>) :'' }
                                              
                                            </div>

                                            <div  className={`signup-box  ${this.state.open ? 'show' : 'hide'}`}>
                                              
                                                    <div className="form-group">
                                                        <input  name="username"   value={this.state.fields["username"] ? this.state.fields["username"] : ''} onChange={this.registerMehandleChange.bind(this, "username")} type="text" className={this.state.errors["username"] ? this.state.errors["username"] : 'form-control'}    placeholder="Username"/>
                                                    </div>

                                                    <div className="form-group">
                                                        <input  name="password"   value={this.state.fields["password"] ? this.state.fields["password"] : ''} onChange={this.registerMehandleChange.bind(this, "password")} type="password" className={this.state.errors["password"] ? this.state.errors["password"] : 'form-control'}    placeholder="Password"/>
                                                    </div>

                                                    <div className="form-group">
                                                        <input  name="cpassword"   value={this.state.fields["cpassword"] ? this.state.fields["cpassword"] : ''} onChange={this.registerMehandleChange.bind(this, "cpassword")} type="password" className={this.state.errors["cpassword"] ? this.state.errors["cpassword"] : 'form-control'}    placeholder="Confirm Password"/>
                                                    </div>
                                                    
                                                    <h4>Please tick all that apply</h4>
                                                    
                                                    <div className="form-group">
                                                        <input ref="investor" name="investor"   value="investor" onChange={this.registerMehandleChange.bind(this, "investor")}  type="checkbox" id="investor" />
                                                        <label className={this.state.errors["investor"] ? this.state.errors["investor"] : ''} for="investor">I am an individual investor</label>
                                                    </div>
                                                    
                                                    <div className="form-group">
                                                        <input  ref="financial" name="financial"   value="financial" onChange={this.registerMehandleChange.bind(this, "financial")} type="checkbox" id="financial"/>
                                                        <label className={this.state.errors["financial"] ? this.state.errors["financial"] : ''} for="financial">I am a financial professional</label>
                                                    </div>
                                                    
                                                    <div className="form-group">
                                                        <input ref="professor" name="professor"   value="professor" onChange={this.registerMehandleChange.bind(this, "professor")} type="checkbox" id="professor"/>
                                                        <label className={this.state.errors["professor"] ? this.state.errors["professor"] : ''} for="professor">I am a student or professor</label>
                                                    </div>
                                                    
                                                    <div className="form-group">
                                                        <input ref="other" name="other"   value="other" onChange={this.registerMehandleChange.bind(this, "other")} type="checkbox" id="other"/>
                                                        <label className={this.state.errors["other"] ? this.state.errors["other"] : ''} for="other">Other: </label>
                                                        <input ref="tell_us_more" name="tell_us_more"   value={this.state.fields["tell_us_more"] ? this.state.fields["tell_us_more"] : ''} onChange={this.registerMehandleChange.bind(this, "tell_us_more")} type="text" className={this.state.errors["tell_us_more"] ? this.state.errors["tell_us_more"] : 'form-control other-input'}    placeholder="Tell us more"/>
                                                    </div>
                                                    
                                                    <div className="form-group terms">
                                                        <input ref="terms" name="terms"   value="terms" onChange={this.registerMehandleChange.bind(this, "terms")} type="checkbox" id="terms"/>
                                                        <label className={this.state.errors["terms"] ? this.state.errors["terms"] : ''} for="terms"><span>I have read and agree to the <a href="#">terms and conditions</a></span></label>
                                                    </div>

                                                    <button type="button" onClick={this.registerMe} className="btn">GO</button>
                                               
                                            </div>
                                            </form>
                                        </div>
                                    </div>

                                    <input id="page2" type="radio" name="screens"/>
                                    <div className={`screen  ${this.state.signinform ? 'show' : 'hide'}`} >
                                        <div className="account-form-heading">
                                            <h2>Sign-In</h2>
                                            <p>Not yet a member? &nbsp;
                                                <label onClick={this.FormtoggleClass} className="label-link" for="page1"> Sign-up here</label>
                                            </p>
                                        </div>
                                        { this.state.loginshowAlert	? (<div style={{background:this.state.color}} className="Idmessage">{this.state.message}</div>) : '' }
                                        
                                        <div className="account-form-content">
                                            <div className="account-form-content-top">
                                                <form>
                                                    <div className="form-group">
                                                        <input type="email"  value={this.state.loginfields["loginemail"]} onChange={this.loginMehandleChange.bind(this, "loginemail")} type="text" className={this.state.errors["loginemail"] ? this.state.errors["loginemail"] : 'form-control'}   placeholder="Email"/>
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="password" value={ this.state.loginfields["loginpassword"] } onChange={this.loginMehandleChange.bind(this, "loginpassword")} className={this.state.errors["loginpassword"] ? this.state.errors["loginpassword"] : 'form-control'}    placeholder="Password"/>
                                                    </div>

                                                    <button type="button" onClick={this.LoginMe} className="btn">GO</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
         );
    }
}  
export default Signup;