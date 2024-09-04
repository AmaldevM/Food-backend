const { getUserIdFromToken } = require("../config/jwtProvider");
const User = require("../models/user.model");
const bcrypt = require("bcrypt")

module.exports={
    async createUser(userData){


        try{
            let {fullName,email,password,role} = userData;
            const isUserExist=await User.findOne({email:emailValue})

            if(isUserExist) {
                throw new Error("User already Exists with email");
            }

            password=await bcrypt.hash(password,8);
                const user = await User.create({
                    fullName,
                    email: emailValue,
                    password: password,
                    role

                });
        return user;
        }
        catch(error){
           throw new Error(error.message);
        }
    },


    async getUserByEmail(email){
        try{
            const user=await User.findOne({ email: email});
            if (!user ){
                throw new Error("User not Found with id -",userId);
            }
            return user;

        }
        catch (error) {
            throw new Error(error.messsage);
        }
    },

    async findUserById(userId){

        try {
            const user = await User.findById(userId).populate("addresses", );

            if (!user ){

            }
             return user;

            
        }  catch(error)
        {
                    throw new Error(error.message);
        }
    },

    async findUserProfileByJwt(jwt){
                // userId

                try {
                    const userId=getUserIdFromToken(jwt);
                    const user=await this.findUserById(userId);
                    
                    return user;
                } catch (error) {
                    throw new Error(error.message);
                }
    },
 async findAllUsers(){
        try {
            const users=await User.find();
            return users;
        } catch (error) {
            throw new Error(error.message)
            
        }
 }
   
};