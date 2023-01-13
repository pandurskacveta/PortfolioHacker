import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import spinner from '../assets/img/spinner5.svg'

 const Skills = () => {

    // parameters for responsive 
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    //   return the component
    return(
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>
                            My Skills
                        </h2>
                        <p>
                        Since I am still in semester three, I believe that I have yet much to learn. However, I can also confidently say that I have acquired many different
                        skills in the different fields of Media Design. This is my self-evaluation in the different subjects.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skills-slider">
                            <div className='item'>
                            <div className='item-wrap'>
                                <div className='item-percent'>75%</div>
                                <img src={spinner} alt='skills-image' className='skills-item-img' />
                                </div> 
                                <h5>UX Design</h5> 
                            </div>
                            <div className='item'>
                            <div className='item-wrap'>
                                <div className='item-percent'>70%</div>
                                <img src={spinner} alt='skills-image'  className='skills-item-img'/>
                                </div>
                                <h5>Web Development</h5> 
                            </div>
                            <div className='item'>
                                <div className='item-wrap'>
                                <div className='item-percent'>85%</div>
                                <img src={spinner} alt='skills-image' className='skills-item-img' />
                                </div>
                                <h5>Media Production</h5> 
                            </div>
                            <div className='item'>
                            <div className='item-wrap'>
                                <div className='item-percent'>80%</div>
                                <img src={spinner} alt='skills-image'  className='skills-item-img'/>
                                </div>
                                <h5>Project Skills</h5> 
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

// exporting the component
 export default Skills