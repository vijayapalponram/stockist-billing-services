import {Request, Response} from 'express';
import {Observable} from 'rxjs/Observable';
import { ErrorResponseBuilder } from '../../services/response-builder';
import { HttpError } from '../../models/error.model';
import { AppMetrics } from '../../../common/metrics';
import { HttpStatus } from '../../services/http-status-codes';
import { LogManager } from '../../../common/log-manager';
import {User} from '../../models/users.model'

const LOG = LogManager.getInstance().getLogger();

export class Controller{
    public async login(req:Request, res:Response){
        
        const user = await User.findUserByCredentials(req.body.username, req.body.password);
        //const user = await User.find({}).exec();
        let result : object;
        if(user != null) {
            result = {"found" : true};
        }
        else {
            result = {"found" : false};
        }
        res.json(result);
    }
}

export default new Controller();

