const ContactUs = require('../models/contactusModel');
const Register = require('../models/registerModel');
const Activitylog = require('../models/useractivityModel');
const nodemailer = require('nodemailer');
const creds = require('./config');

exports.addContactusTODb = async (req, res, next) => { 
    const contact = new ContactUs({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        hireyou: req.body.hireyou,
        question: req.body.question,
        feedback: req.body.feedback,
        businesssynergy: req.body.business_synergy,
        other: req.body.other,
        datetime: req.body.datetime,
        userid: req.body.userid
    }); 


    const output = `
        <div style="padding:10px 100px 0px 0px;width:60%">
            <center><h1 style="margin:0;">New Contact!</h1></center>
            <br/>                            
            <h3 style="margin:0;">Contact Details - </h3>
            <ul>  
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
            </ul>
            <ul>
                ${req.body.hireyou?`<li> ${req.body.hireyou}</li>`:``}
                ${req.body.question?`<li> ${req.body.question}</li>`:``}
                ${req.body.feedback?`<li> ${req.body.feedback}</li>`:``}
                ${req.body.business_synergy?`<li> ${req.body.business_synergy}</li>`:``}
                ${req.body.other?`<li> ${req.body.other}</li>`:``}
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
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
  let mailOptions = {
      from: '"New Contact" <'+creds.USER+'>', // sender address
      to: creds.USER, // list of receivers
      subject: 'New Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });


    try {
            let result = await contact.save();
            if (result) {
                res.status(201).json({
                    data: result, 
                    success:true, 
                    message:'Your details send successfully we will contact you soon.'
                });

             /*--- User activity log ---*/

             let userLogid = await Register.findOne({ _id: req.body.userid });
            //  const userLog = new Activitylog({
            //      userid: userLogid._id,
            //      name: userLogid.name,
            //      action: 'Contact',
            //      datetime: new Date(),
            //      activitydata: req.body.message
            //  }); 
 
            //  let Logresult =  userLog.save();
            //  if (Logresult) {
            //      console.log('Activity Store');

            //  }else{
            //      console.log('No store');
            //  }

             addToActivityLog(userLogid._id,userLogid.name,'Contact',req.body.message);



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


exports.getUserContactListTODb = (req, res, next) => {    
    ContactUs.find({}).then(result => {
        console.log('xxx x xxx', result);
        if (result){
            res.status(201).json({
                data: result
            });

        }
    }).catch(err => {
        console.log('xxx x xxx', err);
    });
}



exports.delUserContactListTODb = (req, res, next) => {
    console.log('deleteNode:',req);
    ContactUs.deleteOne({_id:req.params.id}).then(result => {

        if (result) {
            res.status(201).json({
                data: result,
                success:true,
                message: 'User contact us data has been successfully deleted.'
            });

        }

    }).catch(err => {
        res.status(401).json({
            data: err,
            success: false,
            message: 'User contact us not delete'
        });
        console.log('xxx x xxx', err);
    });
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