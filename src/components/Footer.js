import { Container, Row, Col } from "react-bootstrap"
import logo from '../assets/img/logoTransparent.svg'
import navBar1 from '../assets/img/search.svg'
import navBar2 from '../assets/img/facebook-logo.svg'
import navBar3 from '../assets/img/linked.svg'

// creating the footer component
const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" className="footerLogo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end footer-div" >
                        <div className="social-icon icons-footer">
                            {/* <a href="https://mail.google.com/mail/u/0/#inbox"><img src={navBar1} alt=""></img></a>
                            <a href="https://www.facebook.com/"><img src={navBar2} alt=""></img></a>
                            <a href="https://www.linkedin.com/feed/"><img src={navBar3} alt=""></img></a> */}
                            <p>Copyright 2023. All rights reserved</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

// exporting the footer component
export default Footer