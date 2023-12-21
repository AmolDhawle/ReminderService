const express = require("express")
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const { sendBasicEmail } = require("./services/email-service");

const app = express();

const setupAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server listening at PORT ${PORT}`);

        sendBasicEmail(
            "support@microsoft.com.in",
            "jaiswalbittu590@gmail.com",
            "this is a testing email",
            "hey, how are you!"
        )
    })
}

setupAndStartServer();