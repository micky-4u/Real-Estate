import React from 'react'
import styled from 'styled-components'
import gbImage from '../resources/Home/home2.JPG'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import Brief from '../components/brief'
import { FooterDiv } from '../components/bodyElements'


const Container = styled.div`
margin: 0px;
height: 130vh;
position: relative;
display: flex;
transition: brackground 0.5s;
`

const BgView = styled.div`
background-image:linear-gradient(rgba(0, 0, 0,0.2),rgba(0, 0, 0,0.2),rgba(255,255 , 255,0.1)),  url(${gbImage});
  height: 100%;
  width: 100vw;
  max-width: 100%;
  max-height: auto;
  display: flex;
  flex: 1;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  z-index: -1;
  margin:0px;
  top: 0;
  
  `
  const MainBody = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 90px;
    margin-top: 170px;


  
  `



const Home = () => {
  return (
    <>
    <Container>
      <NavBar></NavBar>
      <BgView></BgView>
      <MainBody>
        <Brief />

      </MainBody>
      <FooterDiv>

        <Footer />
      </FooterDiv>
    </Container>
    </>
  )
}

export default Home