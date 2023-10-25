
const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');
const cors = require('cors');


const app = express();
// Mailgun configuration
const domain = 'sandbox7080470c42114320b3aeca5f95fee900.mailgun.org'; 
const api_key = 'ff046604a5fcf3872b1ed6725120db8e-3750a53b-8f1c969a'; 
const mailgunInstance = mailgun({ apiKey: api_key, domain: domain });

const corseOptions = {
    origin: 'http://localhost:3000',
}
app.use(cors(corseOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    const email = req.body;
    
    const mailData = {
        from: 'Abhinav <sharmaabhi070204@gmail.com>',
        to:'abhinav4753.be22@chitkara.edu.in',
        subject: 'Welcome to Our Newsletter!',
        text: 'Dear subscriber,\n\nThank you for signing up for our newsletter. We are excited to have you on board!\n\nBest regards,\nThe Newsletter Team',
    };

    mailgunInstance.messages().send(mailData, function (error, body) {
        if (error) {
            console.error(error);
            return res.status(500).send("Error sending email");
        } else {
            console.log(body);
            res.status(200).send("Email sent successfully");
        }
    });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log('The Server is running at port ${PORT}!');
});