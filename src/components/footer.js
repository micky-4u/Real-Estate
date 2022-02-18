import React from 'react'
import styled from 'styled-components'
import { FaFacebookSquare as Fb } from "react-icons/fa";
import { AiOutlineMail as Mail } from "react-icons/ai";
import { FaPhoneSquare as Ph } from "react-icons/fa";

const FooterDiv = styled.div`
    height: 150px;
    width: 100%;
    background: #0F262F;
    margin: 0px;
    justify-content: center;
    align-items: center;
    padding: 40px;
`

const IconsDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Icon = styled.div`
    margin-right: 40px;
    margin-left: 40px;
`
const TextDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #fff;
font-family: Arial;
font-size: 11px;
margin: 0px;

`

const Footer = () => {
  return (
    <>
        <FooterDiv>
            <IconsDiv>
                <Icon>
                    <Fb size={40} color={"#fff"}/>
                </Icon>
                <Icon>
                    <Mail size={40} color={"#fff"} />
                </Icon>
                <Icon>
                    <Ph size={40} color={"#fff"} />
                </Icon>

            </IconsDiv>
            <TextDiv>
               <p>
                   Coppyright
               </p>
            </TextDiv>
            <TextDiv>
               <p>
                   STAVEL PROPERTIES 2020
               </p>
            </TextDiv>

        </FooterDiv>
    </>  
  
  )}

export default Footer