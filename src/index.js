const express = require("express")
const bodyParser = require("body-parser");
var cron = require('node-cron');


const { PORT } = require("./config/serverConfig");
const { sendBasicEmail } = require("./services/email-service");
const jobs = require("./utils/job");
const TicketController = require("./controllers/ticket-controller");

const app = express();

const setupAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post("/api/v1/tickets", TicketController.create);
    app.listen(PORT, () => {
        console.log(`Server listening at PORT ${PORT}`);
        jobs();
        
    })
}

setupAndStartServer();