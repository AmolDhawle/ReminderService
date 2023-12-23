const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");

const repo = new TicketRepository();

class TicketService{

    async sendBasicEmail(mailFrom, mailTo, mailSubject, mailBody) {
        try {
            const response = await sender.sendMail({
                from: mailFrom,
                to: mailTo,
                subject: mailSubject,
                text: mailBody
            });
        } catch (error) {
            console.log(error);
        }
        
    }

    async fetchPendingEmails(timestamp) {
        try {
            const response = await repo.get({status: "PENDING"});
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async updateTicket(ticketId, data) {
        try {
            const response = await repo.update(ticketId ,data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async createNotification(data) {
        try {
    
            const response = await repo.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error; // Rethrow the error to propagate it
        }
    }
    
}

module.exports = new TicketService();