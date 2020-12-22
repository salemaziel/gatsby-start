import React, { Component } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import sidebarPageStyle from './page.module.css'

import SideBar from "./sidebar"


    const SectionSidebarPage = (props) => {
    return (
      <>

        <section className={sidebarPageStyle.Section}>
          <div className={sidebarPageStyle.sidebarPageContainer}>
            {/*<div className={pageStyle.autoContainer}>*/}
            <Container>
              <SideBar
              Title={props.title}
              Description={props.description}
              Description2={props.description2}
              Description3={props.description3}
              Description4={props.description4}
              />
            </Container>
            {/*</div>*/}
          </div>
        </section>
      </>
    )
  }


export default SectionSidebarPage
