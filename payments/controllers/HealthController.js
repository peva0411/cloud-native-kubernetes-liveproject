
class HealthController{
    constructor(logger){
        this.logger = logger;
        this.requestCount = 0; 
    }

    async handleLiveness(req, res){
        this.requestCount++; 
        this.logger.info(`Liveness request count ${this.requestCount}`);

        res.status(200); 
        res.send();
    }

    async handleReadiness(req, res){
        this.logger.info('Readiness request handled');

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

    router.get('/readiness', function(req, res){
        controller.handleReadiness(req, res);
    })

    return router;

}

