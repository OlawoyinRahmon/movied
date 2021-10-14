import React from 'react'
import styled from 'styled-components';
import img from "./lp.png";

export const HeaderComp = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src={img}/>
                    <Navigation>
                        <Nav>
                            <Nav>Menu</Nav>
                            <Nav>About</Nav>
                            <Nav>Contact</Nav>
                            </Nav>
                    </Navigation>
            </Wrapper>
        </Container>
    )
}


const Container = styled.div`
width: 100%;
height: 100px;
background-color: blue;
`;
const Wrapper = styled.div`
width: 100%;
height: 100px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: white;
`;
const Logo = styled.img`
width: 200px;
height: 50px;
object-fit: contain;
margin-left: 20px
`;
const Navigation = styled.div`
margin-right: 20px;
display: flex;
`;
const Nav = styled.div`
margin: 0 30px;
font-weight: 900;
transition: all 250ms;

:hover {
    color: blue;
    cursor: pointer;
}
`;