import React from "react";
import { Link } from "gatsby";
import { FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaResearchgate, FaLinkedin } from 'react-icons/fa'


import footerStyles from "./footer.module.css";

const Footer = () => (

      <footer id="footer" className={footerStyles.Footer}>
        <div className={footerStyles.content}>
          <div className={footerStyles.inner}>
            <section className={footerStyles.about}>
              <h3>Button to specific link</h3>
              <p>
               A link to something specific that someone may be looking for on your website.
              </p>
              <ul className={footerStyles.actions}>
                <li>
                  <a href="/#" className={footerStyles.button}>
                    Link to thing
                  </a>
                </li>
              </ul>
            </section>
            <div className={footerStyles.contact}>
            <ul className={footerStyles.iconBulleted}>
              <h3>Get In Touch</h3>
              <li className={footerStyles.Social}>
                  <a href="https://facebook.com" rel="nofollow noreferrer" target="_blank" ><FaFacebook /></a> 
                  <a href="https://instagram.com" rel="nofollow noreferrer" target="_blank"><FaInstagram /></a>
                  <a href="https://twitter.com" rel="nofollow noreferrer" target="_blank"><FaTwitter /></a>
                  <a href="https://linkedin.com" rel="nofollow noreferrer" target="_blank"><FaLinkedin /></a>
              </li>
            </ul>
            </div>
          </div>
        </div>
        <p className={footerStyles.copyright}>
          Via Del Web © All Rights Reserved {/*,<br /> but Rights are a False Concept, Unless You Defend Them <span style={{color: 'black', fill: 'black', fontSize: '1.5rem', textShadow: '1px 1px 1px lightgrey'}}> &#9398; </span><span style={{color: 'red', fill: 'red', fontSize: '1.5rem', textShadow: '1px 1px 1px gray'}}>	&#9773; </span>*/}
          </p>

      </footer>
    );
;
export default Footer;
