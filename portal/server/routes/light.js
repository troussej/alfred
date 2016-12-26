"use strict";
const express_1 = require('express');
const Hueook = require('jtro-hueook');
const lightRouter = express_1.Router();
exports.lightRouter = lightRouter;
const hueook = new Hueook();
lightRouter.route('/light').get((request, response) => {
    hueook.getLights().then(lights => { response.json(lights); });
});
lightRouter
    .route('/light/:id')
    .get((request, response) => {
    hueook.getLight(request.params.id).then(lights => { response.json(lights); });
})
    .put((request, response) => {
    hueook.saveLight(request.params.id, request.body).then(lights => { response.json(lights); });
});
lightRouter.get('/group/:id', (request, response) => {
    hueook.getGroup(request.params.id).then(res => { response.json(res); });
});
lightRouter.get('/group', (request, response) => {
    hueook.getGroups().then(res => { response.json(res); });
});
//# sourceMappingURL=E:/workspace/alfred/portal/dist/server/routes/light.js.map