import React from "react"


import Layout from "../components/layout"

import SEO from "../components/seo"
import { Row, Card, CardBody, CardText, CardTitle, Button } from "reactstrap"
import authors from '../util/authors'
import JohnImage from '../images/john.jpg'
import { slugify } from '../util/utilityFunction'


const About = () => (
  <Layout pageTitle="About Us">
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
                <CardText>You Can Hire Me, This is all you may know now, Please I will appriciate it if You
                  comment, sujest, correct or critise the blog i will be very happy. For more info contact me on 
                  whatsapp<i className="fa fa-whatsapp fa-2x"></i> 07019736590</CardText>
                <Button color="primary" 
                className="text-uppercase"
                href={`/author/${slugify(authors[0].name)}`}>View posts</Button>
            </CardBody>
          </Card>
        </div>
      </Row>
      
    </Layout>
)

export default About
