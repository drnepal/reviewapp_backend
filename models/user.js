const mongoose = require('mongoose');
//npm password hashing package

const bcrypt = require("bcrypt");




// Schema



const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10) // dont go higer than 10 for giving less time for hacker but also same time will make system slow.
    }
    next();
})

module.exports = mongoose.model('User', userSchema)