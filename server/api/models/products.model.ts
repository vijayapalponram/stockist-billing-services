import {mongoose} from '../../common/database';
import { Schema, Model, Document } from "mongoose";

export interface IProduct extends Document {
    productName:string
    rate:Number
    cost:Number
}

export interface IProductModel extends Model<IProduct> {

}

const schema = new Schema({
    productName:String,
    rate:Number,
    cost:Number
})

export const Products = mongoose.model<IProduct>("Products",schema, "Products") as IProductModel;

