import { Col, Container, Nav, Row, Tab, TabContent, TabPane } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import apiimg from '../assets/img/api-challenge.png'
import booklistpic from '../assets/img/booklist-challenge.png'
import dbpic from '../assets/img/database-challenge.png'
import ux1 from '../assets/img/ux1.jpg'
import ux2 from '../assets/img/ux2.jpg'
import ux3 from '../assets/img/moodboard.png'
import mp1 from '../assets/img/currency.png'
import mp2 from '../assets/img/poster.png'
import mp3 from '../assets/img/mb.png'

const Projects = () => {

    // pre-defining arrays of objects, in order to generate and display the project cards
    const projectsProg = [
        {
            title: "Use of Api",
            description: "In this project, I made use of an online API, in order to display the latest information about different countries, including their official name, language currency, population and flag.",
            imgUrl: apiimg,
        },
        {
            title: "Use of Local Storage",
            description: "In this project, for the first time I made use of local storage. By doing that, the user is capable of creating a book list with information about their favorite books, which will not disappear once the page is refreshed. ",
            imgUrl: booklistpic,
        },
        {
            title: "Use of Node.js and MongoDB",
            description: "Using Node.js and MongoDB for the first time was not an easy task. However, by completing it, I managed to create an agenda, storing different events, with information about them, editing and deleting them.",
            imgUrl: dbpic,
        },
    ]

    const projectsMedia = [
        {
            title: "Dystopian Currency",
            description: "For this challenge, we were requested to create our own dystopian currency, related to our group project, which was, in the case, currency coming from us.",
            imgUrl: mp1,
        },
        {
            title: "Poster Challenge",
            description: "For this challenge, I was asked to prepare a poster describing a product, its benefits, and features and make it eye-catching to the audience in question and make them interested in that product.",
            imgUrl: mp2,
        },
        {
            title: "MoodBoard Challenge",
            description: "For this task, I had to create a MoodBoard on a topic of choise. My idea was to recreate a cyber y2k atmosphere. I carefully chose the right colors, layout and images, in order to give the right mood.",
            imgUrl: mp3,
        },]

        const projectsUX = [
            {
                title: "Literature Study Concept",
                description: "The goal of this study was to investigate to what extent people feel stress in their day-to-day lives, and in what environments they feel the stress (e.g. work, school, social life, etc.).",
                imgUrl: ux2,
            },
            {
                title: "Secondary Research Concept",
                description: "In short, this body of literature has been incredibly helpful and has served as the ideal starting point for further research into the issue. It reaffirmed how prevalent stress has become",
                imgUrl: ux1,
            },
            {
                title: "MoodBoard Concept",
                description: "Mood boards organize the sources of inspiration for a project, which is just one use for them. It was a great way to visualize my concept",
                imgUrl: ux3,
            },]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>My Projects</h2>
                        <p>
                            Here you can see some of the work I have done for the semester. I am showcasing my proudest projects, and also the ones from which I have acquired the most new skills.  </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey='first'>
                        <Nav variant="pills" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey='first'>Web Development</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='second'>UX Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='third' >Media Production</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <TabContent>
                            <TabPane eventKey='first'>
                                <Row>
                                    {
                                        projectsProg.map((project, index) => {
                                            return (
                                                <ProjectCard 
                                                  key={index}
                                                   {...project}
                                                   />
                                            )
                                        })
                                    }
                                </Row>
                            </TabPane>
                            <TabPane eventKey='second'>
                            <Row>
                                    {
                                        projectsUX.map((project, index) => {
                                            return (
                                                <ProjectCard 
                                                  key={index}
                                                   {...project}
                                                   />
                                            )
                                        })
                                    }
                                </Row>
                            </TabPane>
                            <TabPane eventKey='third'> <Row>
                                    {
                                        projectsMedia.map((project, index) => {
                                            return (
                                                <ProjectCard 
                                                  key={index}
                                                   {...project}
                                                   />
                                            )
                                        })
                                    }
                                </Row></TabPane>
                        </TabContent>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

// exporting the projects component
export default Projects