import React from 'react'

import SectionOne from './sectionOne'
import SectionTwo from './sectionTwo'
import SectionThree from './sectionThree'
import { Button, Jumbotron, Container } from "react-bootstrap";

import HeroSectionTxtBtnRight from '../../HeroSectionTxtBtnRight'
import CtaSectionBgImage from '../../CtaSectionBgImage'
import {navigateTo, Link} from 'gatsby'

const Homepage = () => (
<>
<section >
<Jumbotron fluid className="py-5">
  <Container>
    <div className="pt-5">
      <h1>Hello, world!</h1>
      <p>
        This is an example of the <tt>gatsby-starter-basic-bootstrap</tt>{' '}
        starter. 
      </p>
      <p>
        <Button as={Link} to="/about" variant="primary" className="btn-lg">Learn more</Button>
      </p>
      </div>
      </Container>
    </Jumbotron>
    </section> 


<HeroSectionTxtBtnRight
          bg="white"
          textColor="dark"
          size="md"
          bgImage=""
          bgImageOpacity={0.8}
          title="Get Online"
          subtitle="Our digital marketing agency can assist you with all your marketing needs. All the way from search engine optimization campaigns, to customized PPC campaigns and even website design solutions."
          description1=""
          description2=""
          description3=""
          description4=""
          description5=""
          description6=""
          description7=""
          buttonText="Get Started"
          buttonColor="primary"
          image="https://res.cloudinary.com/dexdumfqy/image/upload/v1600836618/rbl-art-designs/digital-marketing-1433427_1920_ikotj9.jpg"
          link="/#"
          /*buttonOnClick={() => {
          // Navigate to pricing page
          navigateTo("/");
        }}*/
        />




<CtaSectionBgImage
        bg="dark"
        textColor="white"
        size="md"
        bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1600837824/rbl-art-designs/smartphone-1894723_1920_yti9if.jpg"
        bgImageOpacity={0.8}
        title="Schedule A Consultation"
        subtitle=""
        buttonText="Get Started"
        buttonColor="primary"
        buttonOnClick={() => {
          // Navigate to pricing page
          navigateTo("/about");
        }}
      />


</>
)

export default Homepage
