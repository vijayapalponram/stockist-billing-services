import {Request, Response} from 'express';
import {Observable} from 'rxjs/Observable';
import { ErrorResponseBuilder } from '../../services/response-builder';
import { HttpError } from '../../models/error.model';
import { AppMetrics } from '../../../common/metrics';
import { HttpStatus } from '../../services/http-status-codes';
import { LogManager } from '../../../common/log-manager';
import {User, IUser} from '../../models/users.model'
import {sign, verify, TokenExpiredError, SignOptions} from 'jsonwebtoken';

const LOG = LogManager.getInstance().getLogger();

export class Controller{
    public async login(req:Request, res:Response){
        
        const user = await User.findUserByCredentials(req.body.username, req.body.password);
        //User.findUserByCredentials(req.body.username, req.body.password).then((user:IUser)=>{
            let result : object;
            
            if(user != null) {            
                const token = sign(user, process.env.SECRET_KEY, {expiresIn: process.env.TOKEN_EXPIRY});
                result = {"found" : true, "token":token};
            }
            else {
                result = {"found" : false};
            }
            res.json(result);
       // })
        //const user = await User.find({}).exec();
        
    }
}

export default new Controller();

