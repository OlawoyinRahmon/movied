import React from 'react'
import styled from 'styled-components'
//import img from "../assets/pizza.png"

export const Comp1 = () => {
    return (
        <Container>
            <Wrapper>
                <Content />
               <Title></Title>
                <Desc></Desc>
                <Content/>  
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100vh;
min-height: 100vh;

`;
const Wrapper = styled.div`
width: 100%;
height: 600px;
direction: flex;
justify-content: space-between;
align-items: center;
`;

const Content = styled.div`

`;

const Title = styled.div``;
const Desc = styled.div``;