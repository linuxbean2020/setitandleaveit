const Register = require('../models/registerModel');
const Activitylog = require('../models/useractivityModel');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const creds = require('./config');

exports.addRegisterTODb = async (req, res, next) => { 
    const reg = new Register({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        investor: req.body.investor,
        financial: req.body.financial,
        professor: req.body.professor,
        tell_us_more: req.body.tell_us_more,
        role: req.body.role,
        datetime: req.body.datetime,
        tool_enabled:false,
        number_of_signins:0,
        last_uses_date:new Date()    
    });    





    try {
            let user = await Register.findOne({ email: req.body.email});
            console.log('user:', user);
            if(user){

                res.status(201).json({
                    data: user, 
                    success:false, 
                    message:'Email already exist !!'
                });
            }else{
                let result = await reg.save();
                    if (result) {
                        res.status(201).json({
                            data: result, 
                            success:true, 
                            message:'User Signup Successfully !!'
                        });


                    const emailForAdmin = `
                        <div style="padding:10px 100px 0px 0px;width:60%">
                            <center><h1 style="margin:0;">New User!</h1></center>
                            <br/>                            
                            <h3 style="margin:0;">Registration Details - </h3>
                            <ul>
                                <li>Name : ${req.body.name}</li>
                                <li>Email : ${req.body.email}</li>
                                <li>Username : ${req.body.username}</li>
                                <li>Password : ${req.body.password}</li>
                            </ul>
                            <br/>
                            <h5 style="margin:0;">Support,</h5>
                            <p style="margin:0;">Save It And Leave It Team</p>
                            <p style="margin:0;">support@saveitandleaveit.com</p>
                        </div>                        
                      `;

                    const emailForUser = `
                        <div style="padding:10px 100px 0px 0px;width:60%">			
                            <center><h1 style="margin:0;">Welcome!</h1></center>
                            <br/>
                            <p style="margin:0;">Hello ${req.body.name},</p>
                            <br/>
                            <p style="margin:0;">Thankyou for signing up with saveitandleaveit.com</p>
                            <p style="margin:0;">You can signin with email - ${req.body.email} and password - ${req.body.password}</p>
                            <br/>
                            <br/>
                            <h5 style="margin:0;">Support,</h5>
                            <p style="margin:0;">Save It And Leave It Team</p>
                            <p style="margin:0;">support@saveitandleaveit.com</p>
                        </div>
                    `;
                    
                      // create reusable transporter object using the default SMTP transport
                      let transporter = nodemailer.createTransport({
                        host: 'smtp.gmail.com',
                        port: 587,
                        auth: {
                            user: creds.USER, // generated ethereal user
                            pass: creds.PASS  // generated ethereal password
                        },
                        tls:{
                          rejectUnauthorized:false
                        }
                      });
                    
                      // setup email data with unicode symbols
                      let mailOptionsAdmin = {
                          from: '"New User" <'+creds.USER+'>', // sender address
                          to: creds.USER, // list of receivers
                          subject: 'New Registration', // Subject line
                        //   text: 'Hello world?', // plain text body
                          html: emailForAdmin // html body
                      };

                      // setup email data with unicode symbols
                      let mailOptionsUser = {
                        from: '"Signing Up" <'+creds.USER+'>', // sender address
                        to: req.body.email, // list of receivers
                        subject: 'Thank you for signing up with setitandleaveit.com', // Subject line
                        html: emailForUser // html body
                    };
                    
                      // send mail with defined transport object
                      transporter.sendMail(mailOptionsAdmin, (error, info) => {
                          if (error) {
                              return console.log(error);
                          }
                          console.log('Message sent: %s', info.messageId);   
                          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                      });


                      // send mail with defined transport object
                      transporter.sendMail(mailOptionsUser, (error, info) => {
                        if (error) {
                            return console.log(error);
                        }
                        console.log('Message sent: %s', info.messageId);   
                        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                    });

                        /*--- User activity log ---*/
                        
                        let userLogid = await Register.findOne({ email: req.body.email});

                        // const userLog = new Activitylog({
                        //     userid: userLogid._id,
                        //     name: userLogid.name,
                        //     action: 'SignUp',
                        //     datetime: new Date(),
                        //     activitydata: 'Sign-up with email:'+userLogid.email
                        // }); 
            
                        // let Logresult =  userLog.save();
                        // if (Logresult) {
                        //     console.log('Activity Store');
                        // }else{
                        //     console.log('No store');
                        // }
                        
                        addToActivityLog(userLogid._id,userLogid.name,'SignUp','Sign-up with email:'+userLogid.email);
                    }
                    
            }

    } catch (err) {

        res.status(401).json({
            data: err,
            success: false,
            message: 'Backend error'

        });
        console.log('eeeeeeeeeeeee eeeeeeeeeee ', err)
    }
}


exports.getUserLoginTODb = async (req, res, next) => {
    console.log('xxxxxxxxxx xxxxx', req.body.email);
    
    Register.findOne({ email: req.body.email.email, password: req.body.email.password })
    .then(data => {

        console.log('logindata:', data);
        if (data) {
            const userrole = data.role;
            const token = jwt.sign({
                // email: data.email,
                // name: data.name,
                // username: data.username,
                // role: data.role,
                data:data,
               // _id: data._id
            },
                '@' + data._id + '-' + data.email,
                {
                    expiresIn: "1h"
                });
            res.status(201).json({
                message: "Loged In",
                role: userrole,
                email: data.email,
                token: token,
                success: true 
            });

              
            /*--- User activity log ---*/
            
            addToActivityLog(data._id,data.name,'SignIn','Sign-in with email:'+data.email);
            updateSigninCount(data._id,data.number_of_signins);
            // const userLog = new Activitylog({
            //     userid: data._id,
            //     name: data.name,
            //     action: 'SignIn',
            //     datetime: new Date(),
            //     activitydata: 'Sign-in with email:'+data.email
            // }); 

            // let Logresult =  userLog.save();
            // if (Logresult) {
            //     console.log('Activity Store');
            // }else{
            //     console.log('No store');
            // }

        } else {
            res.status(201).json({
                message: "Invalid email and password please try again.",
                success: false 
            });
        }
    }).catch(err => {
        res.status(401).json({
            message: 'Invalid user',
            success:false
        });
    })
}

    addToActivityLog=(userid,name,action,activitydata)=>{
        const userLog = new Activitylog({
            userid: userid,
            name: name,
            action: action,
            datetime: new Date(),
            activitydata: activitydata            
        }); 

        let Logresult =  userLog.save();

        if (Logresult) {
            console.log('Activity Store');
        }else{
            console.log('No store');
        }
    }

    updateSigninCount= async (userid,count)=>{
        const result = await Register.findByIdAndUpdate({ _id: userid, }, {
            number_of_signins: count+1,
            last_uses_date:new Date()
        });

        if (result) {
            console.log('Signin count incremented by 1');
        }else{
            console.log('Updation failed');
        }
    }
