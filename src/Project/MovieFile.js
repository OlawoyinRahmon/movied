import React from 'react'
import styled from 'styled-components'
import data from './db.json'
import {Link}  from "react-router-dom";

const MovieFile = () => {
    return (
        <Container>
            <Wrapper>
              {data?.map((props, i) => (
               <Card key={i} to={'/detail/${props.id}'}>
                   <Image 
                   src={props.cardImg}/>
                     <Div />
                    <Name>{props.title}</Name>
               </Card>
              ))}
            </Wrapper>
        </Container>
    )
}

export default MovieFile

const Container = styled.div`
display: flex;
height: 100%;
min-height: 100vh;
padding-top: 50px;
`;
const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

const Card = styled.div`
width: 450px;
height: 500px;
background-color: lightgray;
border-radius: 10px;
position: relative;
transition: all 350ms;
transform: scale(1);

:hover{
    transform: scale(1.01);
    box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0.6);

}
`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 10px;
`;
const Div = styled.img`
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
position: absolute;
left: 0;
border-radius: 10px;
transition: all 350ms;

:hover {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const Name = styled.div`
position: absolute;
top: 0;
left: 0;
padding-bottom: 10px;
color: white;
font-size: 20px;
font-weight: 300;
display: flex;
justify-content: flex-end;
align-items: center;
width: 100%;
margin: 0 10px;
transition: all 350ms;
opacity: 0;
flex-direction: column;

:hover {
    opacity: (1);
}
`;