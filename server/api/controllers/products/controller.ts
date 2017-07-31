import {Request, Response} from 'express'
import {Observable} from 'rxjs/Observable'
import {Products} from '../../models/products.model';

export class Controller{
    public async getProducts(req:Request,res:Response){
        const products = await Products.find().exec();
        console.log(products);
        res.json(products);
    }
}

export default new Controller();

