import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import RoundImage from '../components/roundImage'
import image1 from '../resources/houseWithLexus/lex1.JPG'
import { Body, Container, FooterDiv, MainText } from '../components/bodyElements'


const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`
const DescriptionText = styled.div`
    display: flex;
    color: #fff;
    font-family: HelveticaNeue, Helvetica Neue;
    margin-top: 30px;
    line-height: 25px;
    

`
const ImageDiv = styled.div`
  display: flex;
  margin-left: 30px;
  align-items: center;

  
`


const About = () => {
  return (
    <>
    <Container>
    <NavBar></NavBar>
      <Body>
        <TextDiv>
          <MainText>
            About Us!
          </MainText>
          <DescriptionText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed eos quas illo cupiditate quod. Dolorum sed ipsam laudantium quisquam temporibus culpa voluptas voluptate, quaerat nulla? Eos deleniti explicabo aliquid officia provident corrupti, aliquam iste dignissimos architecto ducimus veritatis debitis vero dolorem quos corporis commodi perferendis aperiam soluta eveniet, nisi mollitia?
          </DescriptionText>
        </TextDiv>
        <ImageDiv>
            <RoundImage image = {image1}/>
        </ImageDiv>
      </Body>
      <FooterDiv>
        <Footer />

      </FooterDiv>
    </Container>
    </>
  )
}

export default About