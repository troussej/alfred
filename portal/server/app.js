"use strict";
const express = require('express');
const body_parser_1 = require('body-parser');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const light_1 = require('./routes/light');
const app = express();
exports.app = app;
app.disable('x-powered-by');
app.use(body_parser_1.json());
app.use(compression());
app.use(cors());
app.use(body_parser_1.urlencoded({ extended: true }));
// api routes
app.use('/api/hue', light_1.lightRouter);
if (app.get('env') === 'production') {

    // in production mode run application from dist folder
    app.use(express.static(path.join(__dirname, '/../client')));
}else{
    //  app.use(express.static(path.join(__dirname, '/../')));
}
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    next(err);
});
// production error handler
// no stacktrace leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});
//# sourceMappingURL=E:/workspace/alfred/portal/dist/server/app.js.map