import React from "react"


import Layout from "../components/layout"

import SEO from "../components/seo"
import { Row, Card, CardBody, CardText, CardTitle, Button } from "reactstrap"
import authors from '../util/authors'
import JohnImage from '../images/john.jpg'
import JaneImage from '../images/jane.jpg'
import { slugify } from '../util/utilityFunction'
import TeamLinks from '../components/TeamLinks'


const TeamPage = () => (
  <Layout pageTitle="Our Team">
    <SEO title="Team" />
      <Row className="mb-4">
        <div className="col-md-3">
          <img src={JohnImage} style={{ maxWidth: '100%'}} alt="John Profile"/>
        </div>
        <div className="col-md-8">
          <Card style={{ minHeight: '100%'}}>
            <CardBody>
              <CardTitle>{authors[0].name}</CardTitle>
                <CardText>{authors[0].bio}</CardText>
                <Button color="primary" 
                className="text-uppercase"
                href={`/author/${slugify(authors[0].name)}`}>View posts</Button>
             <div className="author-social-links text-center">
        <ul>
            <li><a href={authors[0].facebook} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="facebook">
                <i className="fa fa-facebook-f fa-lg"></i></a></li>
                <li><a href={authors[0].twitter} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="twitter">
                <i className="fa fa-twitter fa-lg"></i></a></li>
                <li><a href={authors[0].instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="instagram">
                <i className="fa fa-instagram fa-lg"></i></a></li>
                <li><a href={authors[0].google} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="google">
                <i className="fa fa-google fa-lg"></i></a></li>
                <li><a href={authors[0].github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="linkedin">
                <i className="fa fa-github fa-lg"></i></a></li>
        
        </ul>
    </div>
            </CardBody>
          </Card>
        </div>
      </Row>
      <Row className="mb-4">
        <div className="col-md-3">
          <img src={JaneImage} style={{ maxWidth: '100%'}} alt="Jane Profile"/>
        </div>
        <div className="col-md-8">
          <Card style={{ minHeight: '100%'}}>
            <CardBody>
              <CardTitle>{authors[1].name}</CardTitle>
                <CardText>{authors[1].bio}</CardText>
                <Button color="primary" 
                className="text-uppercase"
                href={`/author/${slugify(authors[1].name)}`}>View posts</Button>
                <TeamLinks author={authors}/>
            </CardBody>
          </Card>
        </div>
      </Row>
    </Layout>
)

export default TeamPage
