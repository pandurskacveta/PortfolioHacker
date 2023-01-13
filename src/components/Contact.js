import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import contactPic from "../assets/img/smile.gif"

const Contact = () => {
    const [status, setStatus] = useState("Send");

    // creating a function for handling submission, and sending data to back-end
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;

        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        let response = await fetch("https://portfolio-tsveta-pandurska.herokuapp.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });

        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    // Rendering a form with three fields (name, email, and message). 
    // When the form is submitted we POST the values entered into these fields to the Node.js server.
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactPic} className="ContactImg" alt="contImg" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <h3>&#40;with me &#40;: &#41;</h3>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" required />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" required />
                            </div>
                            <div>
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" required />
                            </div>
                            <button type="submit">{status}</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
