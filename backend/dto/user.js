class UserDTO {
    constructor(user){
        this._id = user._id;
        this.username = user.first_name + " " + user.last_name;
        this.email = user.email;
        this.phone = user.phone;
        this.picture = user.picture;
        this.address = user.address;
        this.dept = user.dept;
        this.gender = user.gender;
        this.rollNo = user.rollNo;
    }
}

export default UserDTO;