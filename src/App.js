import './App.css'
import styled from 'styled-components'
import { GlobalStyle } from './globalstyles'

const StyledApp = styled.div``

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <h1>Hello</h1>
    </StyledApp>
  )
}

export default App
