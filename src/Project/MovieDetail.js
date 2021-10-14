import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { useParams } from "react-router-dom"
import data from "./db.json"

const MovieDetail = () => {
  
  return (
        
              <Container>
            <Background
            src={"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&forma"} 
            />
            <Div />
            <Wrapper>
            <Image />
            <Title>{data?.title}</Title>
           <Sub>Subtitle</Sub>
          <Desc>description</Desc>
            </Wrapper>
        </Container>
    )
}

export default MovieDetail

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
`;
const Wrapper = styled.div`
position: absolute;
top : 0;
font-size: 30px;
`;
const Background = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
position: relative;
`;
const Div = styled.div`
width: 100%;
height: 100vh;
position: absolute;
top:0;
left: 0;
background-color: rgba(0, 0, 0, 0.6);

`;
const Title = styled.div`
font-size: 30px;
font-weight: 900;
text-transform: uppercase;
margin-bottom: 60px;
`;
const Image = styled.img`
width: 500px;
height: 300px;
object-fit: contain;

`; 
const Sub = styled.div`
font-size: 20px;
margin: 20px 0;
`;
const Desc = styled.div`
font-size: 20px;
width: 700px;
`;



