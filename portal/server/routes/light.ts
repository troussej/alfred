import { Router, Response, Request } from 'express';
import * as uuid from 'node-uuid';
const Hueook = require('jtro-hueook');

const lightRouter: Router = Router();
const hueook = new Hueook();

lightRouter.route('light').get((request: Request, response: Response) => {

    hueook.getLights().then(lights => { response.json(lights) });

});

lightRouter
    .route('/light/:id')
    .get((request: Request, response: Response) => {
        hueook.getLight(request.params.id).then(lights => { response.json(lights) });
    })
    .put((request: Request, response: Response) => {
        hueook.saveLight(request.params.id, request.body).then(lights => { response.json(lights) });
    });

lightRouter.get('/group/:id', (request: Request, response: Response) => {
    hueook.getGroup(request.params.id).then(res => { response.json(res) });
});

lightRouter.get('/group', (request: Request, response: Response) => {
    hueook.getGroups().then(res => { response.json(res) });
});


export { lightRouter }
