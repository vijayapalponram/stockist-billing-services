import {Request, Response} from 'express'
import {Observable} from 'rxjs/Observable'
import {Products} from '../../models/products.model';

export class Controller{
    public async getProducts(req:Request,res:Response){
        const products = await Products.find().exec();
        console.log(products);
        res.json(products);
    }
    public async saveProduct(req:Request,res:Response){
        let product = req.body.product;
        const result = await Products.insertMany(product);
        //const products = await Products.find().exec();        
        res.json(result);
    }
}

export default new Controller();

