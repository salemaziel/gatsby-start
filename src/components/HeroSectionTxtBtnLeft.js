import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import SectionHeader2 from "./SectionHeaderFull/SectionHeader2";
import "./HeroSectionTxtBtnRight.scss";
import {Link} from 'gatsby'

function HeroSectionTxtBtnLeft(props) {
  
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container fluid>
        <Row className="align-items-center">
        <Col
            lg={5}
            className="offset-lg-1 mt-5 mt-lg-0 text-center text-lg-left"
            style={{
              backgroundColor: 'rgba(255,255,255,0.3)',
              padding: '3rem 2rem 3rem 2rem',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '5px'
            }}
          >
            <SectionHeader2
              title={props.title}
              subtitle={props.subtitle}
              description={props.description}
              description1={props.description1}
              description2={props.description2}
              description3={props.description3}
              description4={props.description4}
              description5={props.description5}
              description6={props.description6}
              description7={props.description7}
              size={1}
              spaced={true}
              style={{color: 'black!important'}}
            />
            <Button as={Link} to={props.link} className="py-3 px-5 btn-lg btn-block">{props.buttonText} </Button>

          </Col>
          <Col>
            <figure className="HeroSectionTxtBtnRight__image-container mx-auto">
              <Image src={props.image} fluid={true} style={{boxShadow: '10px 10px 10px gray'}} />
            </figure>
          </Col>

        </Row>
      </Container>
    </Section>
  );
}

export default HeroSectionTxtBtnLeft;
