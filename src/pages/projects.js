import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import ProjectSample from '../components/projectSample'
import { Body, FooterDiv, Container, randomText } from '../components/bodyElements'
import image1 from '../resources/houseWithLexus/lex2.JPG'
import image2 from '../resources/houseWithLexus/lex3.JPG'
import image3 from '../resources/houseWithLexus/lex4.JPG'





const Projects = () => {
  return (
    <>
    <Container style={{}}>
    <NavBar></NavBar>

    <Body>
      <ProjectSample image ={image1}/>
      <ProjectSample image = {image2} />
      <ProjectSample image = {image3} />
    </Body>

    <FooterDiv>
      <Footer />
    </FooterDiv> 

    </Container>
    </>
  )
}

export default Projects