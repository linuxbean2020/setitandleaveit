const updateProfile = require('../models/registerModel');
const Activitylog = require('../models/useractivityModel');
const jwt = require('jsonwebtoken');
exports.updateProfileTODb = async (req, res, next) => {
    
    try {
        const result = await updateProfile.findByIdAndUpdate({ _id: req.body.id, }, {
            username: req.body.username,
            email: req.body.email,
            name: req.body.name,
        });

        const token = jwt.sign({
            email: req.body.email,
            name: req.body.name,
            username:  req.body.username,
            role:  req.body.role,
            _id:  req.body.id
        },'@' + req.body.id + '-' + req.body.email,
            {
                expiresIn: "1h"
            });

        if (result) {
            res.status(201).json({
                data: result,
                success: true,
                token: token,
                message: 'Profile Updated successfully.'
            });            
        }

        addToActivityLog(result._id,result.name,'Update Profile','User : '+result.username+' updates profile- Name: '+req.body.name+' Email: '+req.body.email);
    } catch (err) {
        res.status(401).json({
            data: err,
            success: false,
            message: 'Something going wrong please check.'
        });
        console.log('eeeeeeeeeeeee eeeeeeeeeee ', err)
    }

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