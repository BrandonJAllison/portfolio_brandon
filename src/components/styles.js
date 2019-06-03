import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    user-select: none;
    background: lightblue;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Container = styled(animated.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  grid-gap: 5px;
  padding: 5px;
  background: black;
  border-radius: 0;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`

const Item = styled(animated.div)`
  width: 10%;
  height: 50px;
  background: black;
  border-radius: 0;
  will-change: transform, opacity;
`

export { Global, Container, Item }