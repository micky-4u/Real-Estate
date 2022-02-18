import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

const Container = styled.div`
    background:linear-gradient(rgba(0,0,0,0.9),#3D3D3D) ;
    height: 100vh;

`


const Contact = () => {
  return (
    <>
    <NavBar />
    <Container>
    </Container>
    <Footer />
    </>
  )
}

export default Contact;