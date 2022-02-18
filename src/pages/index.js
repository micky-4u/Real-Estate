import React from 'react'
import styled from 'styled-components'
import gbImage from '../resources/welcomeScreen/welcome.JPG'
import logo from '../resources/stavel.png'
import Footer from '../components/footer'
import {Link} from 'react-router-dom'

const Container = styled.div`
margin: 0px;
position: relative;
display: flex;
flex: 1;
justify-content: center;
align-items: center;
height: 130vh;
`

const BgView = styled.div`
background-image: linear-gradient(rgba(0, 0, 0,0.2),rgba(0, 0, 0,0.2),rgba(0, 0, 0,0.9)), url(${gbImage});
  height: 100vh;
  width: 100vw;
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
  const GbLogo = styled.img.attrs({
    src: `${logo}`
  })`
  position: fixed;
  top: 0;
  left: 0;
  height: 160px;
  width: 250px;
  margin-top: 50px;
  margin-left: 40px;
  
  @media screen and (max-width: 760px){
    display: none;
  }

  `
const Btn = styled.button`
  border: 3px solid #086679;
  background: none;
  border-radius: 1rem;
  font-size: 25px;
  font-weight: bold;
  padding-right: 55px;
  padding-left: 55px;
  padding-top: 10px;
  padding-bottom:10px;
  cursor: pointer;
  font-family: HelveticaNeue, Helvetica Neue;
  letter-spacing: 2px;
  color: #44d9f6;
  background: rgba(25,25,25,0.3);
  box-shadow: 
  position: absolute;

  &:hover{
    font-size: 30px;
    transition: all 0.2s ease-in-out;
  }
  `
  const BtnDiv = styled.div`
  display: block;
  position: absolute;


`
const FooterDiv = styled.div`
  
display: flex;
position: absolute;
bottom: 0;
width: 100%;
`





const Welcome = () => {
  return (

    <Container>

      <BgView>
      </BgView>
        <GbLogo />

        <BtnDiv>
        <Link to = "/home">
          <Btn>
            Get Started
          </Btn>
        </Link>
        </BtnDiv>
        
        <FooterDiv>
          <Footer/>

        </FooterDiv>

  
        
    </Container>

         
     
      
  )
}

export default Welcome