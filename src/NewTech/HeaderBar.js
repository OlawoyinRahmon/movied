import React from 'react'
import styled from 'styled-components'

const HeaderBar = () => {
    return (
        <Container>
            <Wrapper>
            <Navigation>
                        <Nav>
                            <Nav>Dapi</Nav>
                            <Nav>Changelog</Nav>
                            <Nav>Pricing</Nav>
                            <Nav>Contact</Nav>
                            <Nav>Login</Nav>
                            <Nav>SignUp</Nav>
                            </Nav>
                    </Navigation>
            </Wrapper>
        </Container>
    )
}

export default HeaderBar

const Container = styled.div``;
const Wrapper = styled.div``;
const Navigation = styled.div``;
const Nav = styled.div``;
