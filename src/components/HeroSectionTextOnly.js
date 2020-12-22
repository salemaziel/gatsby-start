import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader2 from "./SectionHeaderFull/SectionHeader2";
import Fade from 'react-reveal/Fade'

function HeroSectionTextOnly(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Fade>
        <SectionHeader2
          title={props.title}
          subtitle={props.subtitle}
          description={props.description}
          listTitle1={props.listTitle1}
          listItem1={props.listItem1}
          listItem2={props.listItem2}
          listTitle2={props.listTitle2}
          listItem3={props.listItem3}
          listItem4={props.listItem4}
          size={1}
          spaced={true}
          className="text-center"
          description1={props.description1}
          description2={props.description2}
          description3={props.description3}
          description4={props.description4}
          description5={props.description5}
          description6={props.description6}
          description7={props.description7}
        />
        </Fade>
        <Row>
          <Col>
              <div className="image fit" >
                <img src={props.bottomPic} alt={props.bottomPicAlt} />
              </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default HeroSectionTextOnly;
