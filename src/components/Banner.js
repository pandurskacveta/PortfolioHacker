import { useEffect, useState } from "react";
import { Col, Container, Row, Nav} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import  moon  from '../assets/img/moon.svg'


const Banner = () => {

    // indicating which word is currently displaying
    const [ loopNum, setLoopNum ] = useState(0)
    // indicating if the word is being typed or deleted
    const [ isDeleting, setIsDeleting] = useState(false)
    // indicating what text is being shown for the component / showing a small portion
    const [ text, setText ] = useState('')
    // determines how fast a letter comes after the previous one
    const [ delta, setDelta ] = useState(300 - Math.random()*100)
    // indicates how much time passes between 1 extra letter being typed
    const period = 2000

    // list of the words I am rotating
    const rotation = [ "Tsveta Pandurska", "a Fontys Student", "an aspiring WebDev"]

    // function for typing and deleting
    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta);

        // then it clears
        return () => {
            clearInterval(ticker)
        }
        // runs every time the text gets updated
    }, [text]) 

    const [activeLink, setActiveLink] = useState('home')

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    const tick = () => {
        // if it is on the last word, has to go to the first one again
        let i = loopNum % rotation.length
        let fullText = rotation[i]
        // the text to be updated, if the current state is deleting, then we take the full text and delete the last letter, and if not, it is the other way around
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        // update the state
        setText(updatedText)

        // if it is deleting, the pace is different
        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        // if the word is typed out fully, to start deleting
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        }
        // if it is deleted fully, updating the deleting state to false, updating the loop number, and the display pace
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
            
        
    }

    // return the banner component
    return (
        <section className="banner" id="home">
            <Container>
                <Row  className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{`Welcome! I am `}<span className="wrap">{text}</span></h1>
                        <p> My name is Tsveta. I am born and raised in Burgas, Bulgaria. My passions include learning new things, travelling the world and creating. My dream is to one day become a successful web developer. </p>
                        <button><Nav.Link href="#connect" className={`vvd ${activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'}`} onClick={() => onUpdateActiveLink('connect')}>Let's Talk!<ArrowRightCircle size={24}/></Nav.Link> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={moon} alt="image" className="moonPic" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
    
}

// export the banner component
export default Banner