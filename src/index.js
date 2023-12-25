const express = require("express")
const bodyParser = require("body-parser");
var cron = require('node-cron');


const { PORT } = require("./config/serverConfig");
const { sendBasicEmail } = require("./services/email-service");
const jobs = require("./utils/job");
const TicketController = require("./controllers/ticket-controller");
const { subscribeMessage, createChannel } = require("./utils/messageQueue");
const { REMINDER_BINDING_KEY } = require("./config/serverConfig");
const EmailService = require("./services/email-service");

const app = express();

const setupAndStartServer = async() => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    const channel = await createChannel();
    subscribeMessage(channel, EmailService.subscribeEvents, REMINDER_BINDING_KEY);

    app.post("/api/v1/tickets", TicketController.create);
    app.listen(PORT, () => {
        console.log(`Server listening at PORT ${PORT}`);
        // jobs();
        
    })
}

setupAndStartServer();