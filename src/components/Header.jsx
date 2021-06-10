import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../logo.svg'

const Navbar = styled.header`
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 1.6rem 24px;
`

const Container = styled.nav`
  margin: 0 auto;
  max-width: 1200px;
`

const Logo = styled(Link)`
  align-items: center;
  display: flex;
  font-size: 2.1rem;
  font-weight: 600;
  width: fit-content;
`

const Image = styled.img`
  height: 3.2rem;
  margin-right: 0.4rem;
`

const Header = () => (
  <Navbar>
    <Container>
      <Logo to="/">
        <Image src={logo} alt="logo" />
        Clotheshop
      </Logo>
    </Container>
  </Navbar>
)

export default Header
