'use strict';

module.exports = class BaseController {
    static responseJSON(res, jsonObject, next){
        if (!res.headerSent) {
            return res.status(200).json(jsonObject);
        }
        return next();
    }
}
