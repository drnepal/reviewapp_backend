const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/reviewapp')
.then(()=> {
    console.log('db is connected');
}).catch((ex)=>{ //
    console.log("db connection failed",ex);//The variable name ex is short for "exception", which is a common term used 
    // in programming to refer to unexpected or erroneous behavior.

})
