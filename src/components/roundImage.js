import React from 'react'
import styled from 'styled-components'


const Circle = styled.div`
height: 400px;
width: 400px;
border-radius: 50%;
border: none;
outline: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px;


`

const RoundImage = (props) => {
  return (
      <>
        <Circle style={{backgroundImage:`url(${props.image})` }}>

        </Circle>
      </>
  )
}

export default RoundImage