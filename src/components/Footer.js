import React from "react"

const Footer = () => (
      <div className="site-footer">
          <h4 className="text-center">
              Code Blog
          </h4>
          <p className="text-center">Follow me on social media</p>
          <div className="footer-social-links">
              <ul className="social-links-list">
                  <li>
                      <a href="https://www.facebook.com" 
                  target="_blank" rel="noopenner noreferrer"
                  className="facebook">
                      <i className="fab fa-facebook-f fa-2x" aria-hidden="true"/>
                      </a>
                      </li>
                      <li>
                      <a href="https://www.twitter.com" 
                  target="_blank" rel="noopenner noreferrer"
                  className="twitter">
                      <i className="fab fa-twitter fa-2x"/>
                      </a>
                      </li>
                      <li>
                      <a href="https://www.instagram.com" 
                  target="_blank" rel="noopenner noreferrer"
                  className="instagram">
                      <i className="fab fa-instagram fa-2x"/>
                      </a>
                      </li>
                      <li>
                      <a href="https://www.google.com" 
                  target="_blank" rel="noopenner noreferrer"
                  className="google">
                      <i className="fab fa-google fa-2x"/>
                      </a>
                      </li>
                      <li>
                      <a href="https://www.github.com" 
                  target="_blank" rel="noopenner noreferrer"
                  className="linkedin">
                      <i className="fab fa-github fa-2x"/>
                      </a>
                      </li>
              </ul>
          </div>
          <p className="text-center">For Sponshorship, Query, Correction, Critisim, Donation or more Info about the blog Kindly contact me through the <i className="fa fa-whatsapp fa-x2"/> WhatsApp Number 07019736590</p>

      </div>
)

export default Footer