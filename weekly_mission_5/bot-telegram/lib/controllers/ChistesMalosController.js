const ChistesMalosService = require("../services/ChistesMalosService");

class ChistesMalosController{
    static getChistesMalos(id){
        return ChistesMalosService.filterByChistesMalos(id);
    }
}

module.exports = ChistesMalosController;