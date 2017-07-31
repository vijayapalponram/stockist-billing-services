import * as express from 'express'
import Controller from './Controller'
export default express.Router().get('',Controller.getProducts);

