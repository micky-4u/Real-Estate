import React from 'react'
import Navbar from '../components/navbar'
import { Container, FooterDiv, Body, MainText } from '../components/bodyElements'
import Footer from '../components/footer'
import styled from 'styled-components'


const ImageArea = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    
`
const MajorImage = styled.div`
    height: 400px;
    background-color: #fff;
    border: none;
    outline: none;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 20px;


`
const MinorImageDiv = styled.div`
    display: flex;
    justift-content: space-around;
    margin-top: 20px;
`
const MinorImages = styled.div`
    height: 150px;
    background-color: #fff;
    border: none;
    outline: none;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid black;
    width: 150px;
    margin-right: 30px;


`

const ProjectInfoPage = () => {
  return (
        <>
            <Container style ={{height: "150vh"}}>
                <Navbar></Navbar>
                <Body style={{display: "flex", justifyContent: "space-between", height: "80vh"}}>
                    <MainText>
                        Project
                        Info
                    </MainText>
                    <ImageArea>
                        <MajorImage />
                        <MinorImageDiv>
                            <MinorImages />
                            <MinorImages />
                            <MinorImages />
                        </MinorImageDiv>
                    </ImageArea>
                    

                </Body>

                <FooterDiv >
                     <Footer></Footer>
                </FooterDiv>
            </Container>

        </>
    )
}

export default ProjectInfoPage