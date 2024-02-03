module.exports = (app, repositories, logger) => {
    const loadPaymentsController = require('./PaymentsController')
    const loadHealthController = require('./HealthController')
    app.use("/api/payment-methods", loadPaymentsController(repositories, logger))
    app.use("/api/health", loadHealthController(logger));
}

