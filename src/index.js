const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT;  
app.use(bodyParser.urlencoded({     
    extended: true
}));
app.use(bodyParser.json());
app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;  
 
const client = require('twilio')(accountSid, authToken, { 
    lazyLoading: true 
});

const data = {};  let count = 0;
app.post('/whatsapp',(req, res) => {
    if(count == 0){     

        client.messages
        .create({
            body: `Hey there\nWhat is your full name?`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err));       
    }
    if(count == 1){
        data.name = req.body.Body;
        client.messages
        .create({
            body: `Hi ${data.name}, \nWhat is your age?`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 2){
        data.age = req.body.Body;
        client.messages
        .create({
            body: `What is your Birth Date in MM/DD/YYYY format?`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 3){
        data.dob = req.body.Body;
        client.messages
        .create({
            body: `Please enter your cell phone number`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 4){
        data.phoneNumber = req.body.Body;
        client.messages
        .create({
            body: `Please enter your Email Id`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 5){
        data.email = req.body.Body;
        client.messages
        .create({
            body: `Please enter your the type of ID, you would like to submit\n(Aadhar card/ Voter ID card etc)`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 6){
        data.idType = req.body.Body;
        client.messages
        .create({
            body: `Please enter your Home Address`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 7){
        data.homeAddress = req.body.Body;
        client.messages
        .create({
            body: `What is your property ownership status?\n(Owned/Rent)`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 8){
        data.propertyOwner = req.body.Body;
        client.messages
        .create({
            body: `What is your martial status?\n(Single/Married/Divorced)`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 9){
        data.martialStatus = req.body.Body;
        client.messages
        .create({
            body: `Please enter your place of work?\nType NA if it doesn't apply to you`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 10){
        data.workPlace = req.body.Body;
        client.messages
        .create({
            body: `Please enter your Work Address\nType NA if it doesn't apply to you`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 11){
        data.workAddress = req.body.Body;
        client.messages
        .create({
            body: `What is your monthly income?\nType NA if it doesn't apply to you`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 12){
        data.monthlyIncome = req.body.Body;
        client.messages
        .create({
            body: `Please enter your the name of your Bank\nType NA if it doesn't apply to you`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 13){
        data.bankName = req.body.Body;
        client.messages
        .create({
            body: `Please enter your credit score`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 14){
        data.creditScore = req.body.Body;
        client.messages
        .create({
            body: `Please enter your debt amount`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 15){
        data.debt = req.body.Body;
        client.messages
        .create({
            body: `Please enter your loan term`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 16){
        data.loanTerm = req.body.Body;
        client.messages
        .create({
            body: `Please enter your credit incidents`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 17){
        data.creditIncidents = req.body.Body;
        client.messages
        .create({
            body: `Please enter the loan amount`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 18){
        data.loanAmount = req.body.Body;
        client.messages
        .create({
            body: `Please enter your home value`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 19){
        data.homeValue = req.body.Body;
        client.messages
        .create({
            body: `You just entered the following details:
        Name : ${data.name}
        Age : ${data.age}
        Birth Date: ${data.dob}
        Phone Number : ${data.phoneNumber}
        Email : ${data.email}
        Type of ID: ${data.idType}
        Home Address: ${data.homeAddress}
        Property ownership: ${data.propertyOwner}
        Martial Status:${data.martialStatus}
        Place of Work: ${data.workPlace}
        Work Address: ${data.workAddress}
        Monthly net income: ${data.monthlyIncome}
        Bank Name: ${data.bankName}
        creditScore: ${data.creditScore}
        debt: ${data.debt}
        loanTerm: ${data.loanTerm}
        creditIncidents: ${data.creditIncidents}
        loanAmount: ${data.loanAmount}
        homeValue: ${data.homeValue}\n\nWe are processing your details....
            `,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err));         
    }
    console.log(data);
});

    

