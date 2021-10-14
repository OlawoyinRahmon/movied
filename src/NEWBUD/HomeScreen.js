import React from 'react';
import styled from 'styled-components';
import  {HeaderComp}  from "./HeaderComp";
import  {Comp1}  from "./Comp1"

export const HomeScreen = () => {
    return (
        <Container>
            <Wrapper>
                <HeaderComp />
            <Comp1 />
            </Wrapper>
        </Container>
    )
}


const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-color: brown
;
`;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
`;