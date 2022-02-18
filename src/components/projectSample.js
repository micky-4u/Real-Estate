import React from 'react'
import styled from 'styled-components'
import { Btn,randomText, Body } from './bodyElements'
import { Link } from 'react-router-dom'

const MainBody = styled.div`
    display: flex;
    flex-direction: column;
    height: 450px;
    width: 300px;
    margin-top: 80px;
`
const ImageDiv = styled.div`
    height: 200px;
    background-color: #fff;
    border: none;
    outline: none;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    
`
const MainText = styled.div`
margin-top: 20px;
font-weight: bold;
color: #fff;
    
`

const Text = styled.div`
    color: #fff;
    font-size: 12px;
`


const ProjectSample = (props) => {

  return (
        <>
        <Body style={{marginLeft: "10px"}}>

            <MainBody>
                <ImageDiv style={{backgroundImage: `url(${props.image})`}} />
                <MainText>
                    Unique Luxurious with Range
                </MainText>
                <Text>
                    {randomText}
                </Text>
                <Link to="/projectInfoPage">
                <Btn style ={{width: "45%", background: "#2C6F87", marginTop: "20px", fontSize: "13px"}}>
                    See More
                </Btn>
                </Link>
            </MainBody>
        </Body>
        </> 
 )
}

export default ProjectSample