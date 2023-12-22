const express = require("express")
const bodyParser = require("body-parser");
const schedule = require('node-schedule');

const { PORT } = require("./config/serverConfig");
const { sendBasicEmail } = require("./services/email-service");

const app = express();

const setupAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server listening at PORT ${PORT}`);
        // schedule.scheduleJob('', () => {
            sendBasicEmail(
                "support@microsoft.com.in",
                "jaiswalbittu590@gmail.com",
                "messageRegret",
                "Hello dear candidate, this is to inform you that you cannot login into the fit India exam as the deadline has passed."
            );
        
    })
}

setupAndStartServer();