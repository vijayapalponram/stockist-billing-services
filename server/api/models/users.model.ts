import { mongoose } from "../../common/database";
import { Schema, Model, Document } from "mongoose";

export interface IUser extends Document {
    username: string;
    password: string;    
}

export interface IUserModel extends Model<IUser> {
    findUserByCredentials(username: string, password: string): Promise<IUser>    
}

const schema = new Schema({
    username : {
        type : String
    },
    password : {
        type : String
    }
});


schema.static("findUserByCredentials", async(username:string, password:string) => {
    
    return User
        .findOne({"username":username, "password":password})
        .lean()
        .exec();

})

export const User = mongoose.model<IUser>("Users", schema, "Users") as IUserModel;

