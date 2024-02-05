# Reminder Service

Welcome to the Reminder Service! This service provides reminder functionalities within the airline booking management system. It includes features such as sending reminder emails and scheduling reminder tasks.

## Features

Sending Reminder Emails: This service includes functionality to send reminder emails to users for various events or tasks.

Scheduling Reminder Tasks: Using the node-cron library, this service can schedule reminder tasks to be executed at specific times or intervals.

## Endpoints
Create Ticket: POST /api/v1/tickets - Create a new ticket.

## Getting Started
To get started with the Reminder Service, follow these steps:

Clone the repository to your local machine.
Navigate to the Reminder Service directory.
Install dependencies using `npm install`.
-Create a `.env` file in the root directory and add the following environment variable
    -`PORT: 3003`
-Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
    "development": {
        "username": <YOUR_DB_LOGIN_NAME>,
        "password": <YOUR_DB_PASSWORD>,
        "database": "Reminder_DB",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
```

-Once you've added  your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute  `npx sequelize db:migrate`.
Start the service using `npm start`.
Access the endpoints using a REST client or integrate them into your application.

