import { mongoose } from "../../common/database";
import { Schema, Model, Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    firstName: string;
    lastName : string;
    roleCode:Number    
}

export interface IUserModel extends Model<IUser> {
    findUserByCredentials(username: string, password: string): Promise<IUser>    
}

const schema = new Schema({
    name : String,
    firstName : String,   
    lastName : String,  
    username :String,
    password : String,
    roleCode : Number,
    loginEnable : Boolean,
    passwordLock :Boolean
});


schema.static("findUserByCredentials", (username:string, password:string) : Promise<IUser> => {
    
    return User
        .findOne({"username":username, "password":password}, 'name firstName lastName')
        .lean()
        .exec();

})

export const User = mongoose.model<IUser>("Users", schema, "Users") as IUserModel;

