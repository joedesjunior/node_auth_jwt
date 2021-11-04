const mongoose = require('mongoose'); 

const User = mongoose.model('User', {
    name : ({
        type: String, 
        required: true
    }),
    mail : ({
        type: String,
        required: true
    }),
    password : ({
        type: String,
        required: true
    }), 
    confirmPassword: ({
        type: String,
        required: true
    })

  
}); 

module.exports = User;