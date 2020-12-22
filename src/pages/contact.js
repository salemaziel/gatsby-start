import React from "react";
import ContactPage from '../components/PageComponents/Contact/ContactPage'
import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />

    <ContactPage />
  </Layout>
);

export default Contact;
