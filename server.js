const express = require("express");
const nodemailer = require("nodemailer");
const { join } = require("path");

const app = express();

app.use(express.static(join(__dirname)));

app.get('/', function(req, res){
    res.sendFile(join(__dirname,"index.html"));
});

const transport = nodemailer.createTransport({
    service: 'Gmail',
    host : 'smtp.gmail.com',
    port: 456,
    secure: true,
    auth : {
        user: 'goldenhour0520@gmail.com',
        pass: 'tlgglvhegtgfedli'
    }
})

const options = {
    from : 'goldenhour0520@gmail.com',
    subject : 'feedback'
}

app.get('/feedback', function (req,res){

    const {name, email, contact, occasion, message} = req.query;

    options.to = email;
    options.text = message;

    transport.sendMail(options, function(err, info){
        if(err)
            res.send("Please try again...");
        else{
            res.json({status: true, msg : 'Mail sent successfully.'});
        }
    })
})


app.listen(5151, () => console.log("Server started @ 5151 port."));