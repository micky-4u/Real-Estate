import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Btn } from './bodyElements'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Status = styled.div`
    color: #272727 ;
    font-size: 15px;
    font-family: HelveticaNeue, Helvetica Neue;
    font-weight:bold;


`
 const ProjectDiv = styled.div`
    color: #fff;
    font-size: 60px;
    font-weight: bold;
    font-family: HelveticaNeue, Helvetica Neue;
    overflow-x: hidden;

 `
 const SeeProject = styled.div`
    display: flex;
    justift-content: space-evenly;

 `





const Brief = () => {
  return (
      <>
        <Container>
            <Status>
                Latest Project
            </Status>
            <ProjectDiv>
                First Second Last
            </ProjectDiv>
            <ProjectDiv>
                <Link to= "/">
                <Btn>
                    SEE PROJECTS 
                </Btn>
                </Link>
            </ProjectDiv>

        </Container>
      </>
  )
}

export default Brief