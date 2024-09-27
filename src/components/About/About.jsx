import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar'
import './About.css';

const teamMembers = [
  {
    name: 'Hemant Pathak',
    pos: 'Lead',
    img: require('./assets/Hemant_Pathak.jpeg'),
    github: 'https://github.com/hemant030406',
    linkedIn: 'https://linkedin.com/in/hemant030406',
    mail: '112201024@smail.iitpkd.ac.in'
  },
  {
    name: 'Pushti Vasoya',
    pos: 'Member',
    img: require('./assets/Pushti_Vasoya.jpg'),
    github: 'https://github.com/PushtiVasoya',
    linkedIn: 'https://www.linkedin.com/in/pushti-vasoya-05777a252/',
    mail: '112201005@smail.iitpkd.ac.in' 
  },
  {
    name: 'Arjun K',
    pos: 'Member',
    img: require('./assets/Arjun.jpg'),
    github: 'https://github.com/ArjunK-2809',
    linkedIn: 'https://www.linkedin.com/in/arjun-k-a003011b4/',
    mail: '122301004@smail.iitpkd.ac.in' 
  },
  {
    name: 'Swadha Swaroop',
    pos: 'Member',
    img: require('./assets/swadha_swaroop.jpg'),
    github: 'https://github.com/Rocky0204',
    linkedIn: 'https://www.linkedin.com/in/swadha-swaroop-152377253',
    mail: '112201009@smail.iitpkd.ac.in' 
  },
];

const About = () => {
  let aboutImage = "https://iitpkd.ac.in/sites/default/files/2024-02/Priority1_Saraswati%20Block-1.jpg"
  return (
    <div className="About">
      <NavBar />
      <div>
        <Container className="mt-5">
          <Row>
            <Col md={9}>
              <img src={aboutImage} alt="About" className="img-fluid" />
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center">
              <h2>About Us</h2>
              <p style={{marginTop:'-2rem'}}>
                This Website is developed under Yet Another Coding Club(YACC) of IIT PALAKKAD, Kerala, India. It is designed to display the weather conditions of different places. It can access your current location and display data based on that location.
              </p>
              <a target='blank' href='https://iitpkd.ac.in/'>
                <Button variant="primary" style={{width:'100%'}}>Learn More</Button>
              </a>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={12}>
              <h3 className="text-center">Website Developing Team</h3>
            </Col>
            <Col md={12}>
              <div className="team-container" style={{display:'flex', justifyContent:`${teamMembers.length < 7 ? 'center' : ''}`}}>
                {teamMembers.map((member, id) => (
                  <Card key={id} className="team-card">
                    <Card.Img variant="top" src={member.img} className="team-img" />
                    <Card.Body className="team-body">
                      <Card.Title style={{textAlign:'center'}} >{member.name}</Card.Title>
                      <Card.Title style={{textAlign:'center'}} >{member.pos}</Card.Title>
                      <Card.Text>
                        <div className='footer-icons'>
                          <a target='blank' href={member.github}><i class="fa-brands fa-github"></i></a>
                          <a target='blank' href={member.linkedIn}><i class="fa-brands fa-linkedin-in"></i></a>
                          <a href={`mailto:${member.mail}`} style={{ textDecoration: 'none', color: 'white' }}>
                            <i class="fa-solid fa-envelope"></i>
                          </a>
                        </div>
                        {/* Brief description of the team member. */}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default About

