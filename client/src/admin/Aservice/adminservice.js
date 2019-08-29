import axios from 'axios';
export default class AdminService {

    constructor() {
        this.domain = 'http://localhost:3300'; // API server domain
    }

    // getProfile() {
    //     return decode(this.getToken());
    // }

    
    getUserAll(){
        console.log('adminService...xx..x');
        return axios.get(this.domain + '/sellandleave/userlist')
            .then((result) => {
                return (result);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxx err is ', err);
            });
    }

    getAllContactList(){
        console.log('adminContactService...xx..x');
        return axios.get(this.domain + '/sellandleave/userContactlist')
            .then((result) => {
                return (result);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxx err is ', err);
            });
    }

    getAllActivityLogList(){
        console.log('adminuserlogService...xx..x');
        return axios.get(this.domain + '/sellandleave/userActivityLog')
            .then((result) => {
                return (result);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxx err is ', err);
            });
    }

    AdminEditUserInfo(userInfoVo){
        console.log('editAdminService:',userInfoVo);
        return axios.post(this.domain + '/sellandleave/userEditInfo', userInfoVo)
            .then((result) => {
                return (result);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxx err is ', err);
            });
    }

    AdmindeleteUserById(id) {
        console.log('userSid:',id);
        return axios.delete(this.domain + '/sellandleave/delUser/'+id)
            .then((result) => {
                return (result);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxx err is ', err);
            });
    }

    AdmindeleteUserContactById(id) {
        console.log('userSid:',id);
        return axios.delete(this.domain + '/sellandleave/delUserContact/'+id)
            .then((result) => {
                return (result);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxx err is ', err);
            });
    }

    AdminDeleteActivityLogById(id) {
        console.log('ActivityLogId:',id);
        return axios.delete(this.domain + '/sellandleave/delActivityLog/'+id)
            .then((result) => {
                return (result);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxx err is ', err);
            });
    }


}    