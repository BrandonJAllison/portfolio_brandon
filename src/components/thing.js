import React, { useState, useRef } from 'react'
import { render } from 'react-dom'
import { useTransition, useSpring, useChain, config } from 'react-spring'
import { Global, Container, Item } from './styles'
import data from './data'
import { Link } from "gatsby"
import {FaGithub, FaTwitter} from 'react-icons/fa'
import "./components.css"

export default function Thing() {
  const [open, set] = useState(false)

  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: '2%', background: 'black' },
    to: { size: open ? '100%' : '2%', background: open ? 'black' : 'black' }
  })

  const transRef = useRef()
  const transitions = useTransition(open ? data : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

  return (
    <>
      
      <Container style={{ ...rest, width: size, height: size }} onClick={() => set(open => !open)}>
      {transitions.map(({ item, key, props, name}) => (
          <Item key={key} name={item.name} style={{ ...props, color: 'white', display:'flex', alignItems:'center'}}>
      <Link style={{color: "white", padding: ".5rem", textDecoration: "none"}}>About</Link>
      <Link style={{color: "white", padding: ".5rem", textDecoration: "none"}}>Projects</Link>
      <Link style={{color: "white", padding: ".5rem", textDecoration: "none"}}>Contact</Link>
      <Link><FaGithub className="github"/></Link>
      <Link ><FaTwitter className="twitter"/></Link>
          </Item>
        ))}
     
      
        
    
      </Container>
      
    </>
  )
}

