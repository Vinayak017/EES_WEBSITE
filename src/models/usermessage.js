const mongoose = require('mongoose');

const validator = require('validator');

const userSchema= mongoose.Schema({
    
    name:{
         type: String,
         required: true,
         minLength:3
        },
        
        // registration_id:{
            //         type: 'string',
            //         required: true,
            //         minLength:11
            //        },
            
            email:{
                type: String,
                required: true,
                validate(value){
                    if(!validator.isEmail(value)){
                        throw new Error('Invalid email address')
                    }
                }
            },
            
            //  password:{
                //      type: 'string',
                //      required: true,
                //      minLength:6
                //     },
                
                phone:{
                    type: Number,
                    required: true,
                    min:10
                },
            
            
            message:{
                 type: String,
                 required: true,
                 minLength:3
                },
            })
            

const User = mongoose.model('User',userSchema);

module.exports = User;
