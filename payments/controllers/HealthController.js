
class HealthController{
    constructor(logger){
        this.logger = logger;
        this.requestCount = 0; 
    }

    async handleLiveness(req, res){
        this.requestCount++; 
        this.logger.info(`Liveness request count ${this.requestCount}`);

        if (this.requestCount > 5){
            res.status(500);
            res.send();
            return;
        }

        res.status(200); 
        res.send();
    }
}

module.exports = (logger) => {
    var controller = new HealthController(logger);
    var express = require('express')
    var router = express.Router() 

    router.get('/liveness', function(req, res){
        controller.handleLiveness(req, res);
    })

    return router;

}

