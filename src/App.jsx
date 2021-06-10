import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'

const Main = styled.main`
  padding: 0 24px;
`

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

const App = () => (
  <Router>
    <Header />
    <Main>
      <MainContainer>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/product/:productId" component={ProductDetails} />
        </Switch>
      </MainContainer>
    </Main>
  </Router>
)

export default App
