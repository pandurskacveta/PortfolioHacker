const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Using express() to setup the server that’ll run on port 3000:
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3000, () => console.log("Server Running"));

// creating the transport
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "pandurskacveta@gmail.com",
      pass: "evsifhlwuujznxtj",
    },
  });
  
  // if there is an error. console log the error
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  // Seting up the router, taking the information, rendering it, and sending it to gmail to the already defined account
  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    console.log(name);
    const mail = {
      from: name,
      to: "pandurskacveta@gmail.com",
      subject: "Personal Portfolio Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    // sending the email, and if there is an error, console log it
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });