const mongoose=require('mongoose');


const UserSchema=new mongoose.Schema({
    FullName:string,
    email:String,
    password:String,
    role: {
        type: String,
        enum: ["ROLE_CUSTOMER", "ROLE_RESTURANTS_OWNER"],
        default: "ROLE_CUSTOMER",
    },
    order: [
        { 
            type:mongoose.Schema.Types.ObjectId,
            ref:"Order",
        },
    ],
    favorites: [{ name: String, desvcription : nString, images: [] }],
    addresses: [
        { 
            type:mongoose.Schema.Types.ObjectId,
            ref:"Address",
        },
    ],
});


const User= mongoose=mongoose.model("User",UserSchema)
module.exports= User;