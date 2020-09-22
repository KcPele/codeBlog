/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import '../styles/index.scss'
import Footer from "./Footer"
import { Row, Col } from 'reactstrap'
import SideBar from './SideBar'

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
     <link rel="stylesheet" 
     href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
     integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" 
     crossOrigin="anonymous"/>
       
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container" id="content">
       <h1>{pageTitle}</h1>
        <Row>
          <Col md="8">
          <main>{children}</main>
          </Col>
          <Col md="4"> <SideBar/></Col>
        </Row>
        <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
