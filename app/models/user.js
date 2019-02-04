var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 
var bcrypt = require('bcrypt-nodejs'); 





var passwordValidator = [
    validate({
        validator: 'matches',
        arguments: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/,
        message: 'Password needs to have at least one lower case, one uppercase, one number, one special character, and must be at least 8 characters but no more than 35.'
    }),
    validate({
        validator: 'isLength',
        arguments: [8, 35],
        message: 'Password should be between {ARGS[0]} and {ARGS[1]} characters'
    })
];

var UserSchema = new Schema({
    username: { type: String, lowercase: true, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true}
});

UserSchema.methods.comparePassword = function(password){
  return bcrypt.comparesync(password, this.password);
};




module.exports = mongoose.model('User', UserSchema); 