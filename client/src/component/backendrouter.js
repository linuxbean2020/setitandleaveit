import React, { Component } from 'react';
import {  Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import AdminHeader from '../admin/Acomponent/adminheader';
import AdminDashboard from '../admin/Acomponent/dashboard';
import AdminUserlist from '../admin/Acomponent/userlist';
import AdminContactList from '../admin/Acomponent/admincontactlist';
import AdminActivitylogList from '../admin/Acomponent/useractivitylog';

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
                      
                        <AdminHeader />
                            <div>
                            <Switch>
                                <Route exact path="/admin" component={AdminDashboard} />
                                <Route path="/admin/Dashboard" component={AdminDashboard} />
                                <Route path="/admin/userlist" component={AdminUserlist} />
                                <Route path="/admin/contactlist" component={AdminContactList} />
                                <Route path="/admin/activitylog" component={AdminActivitylogList} />
                            </Switch>
                            </div>
                        {/* <AdminFooter /> */}
                       
                   </div>
        );
  }
}

export default Frontendrouters;
