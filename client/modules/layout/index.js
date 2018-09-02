import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  height: 4rem;
  font-size: 1rem;
  color: #555555;
`

const Footer = styled.footer`
  height: 3rem;
  font-size: 0.8rem;
  color: #888888;
`

const Content = styled.main`
  flex: 1;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export default class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <Header>my header</Header>
        <Content>{children}</Content>
        <Footer>my footer</Footer>
      </Container>
    )
  }
}
