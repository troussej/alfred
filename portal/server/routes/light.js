"use strict";
const express_1 = require('express');
const Hueook = require('jtro-hueook');
const lightRouter = express_1.Router();
exports.lightRouter = lightRouter;
const hueook = new Hueook();
lightRouter.route('/light').get((request, response) => {
    hueook.getLights().then(lights => { response.json(serializeLights(lights)); });
});
lightRouter
    .route('/light/:id')
    .get((request, response) => {
    hueook.getLight(request.params.id).then(light => { response.json(serializeLight(light)); });
});
lightRouter
    .route('/light/:id/state')
    .put((request, response) => {
    hueook.saveLight(request.params.id, request.body).then(light => { response.json(serializeLight(light)); });
});
lightRouter.get('/group/:id', (request, response) => {
    hueook.getGroup(request.params.id).then(res => { response.json(res); });
});
lightRouter.get('/group', (request, response) => {
    hueook.getGroups().then(res => { response.json(res); });
});

function serializeLights(lights) {
    var res = [];

    for (var i = 0; i < lights.length; i++) {
       res.push(serializeLight( lights[i]));
    }

    return res;
}


function serializeLight(light) {
    return {
        id:light.id,
        on:light.on,
        name:light.name,
        brightness:light.brightness,
        saturation:light.saturation,
        hue:light.hue
    }
}
