import React,{useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import {Link} from "react-router-dom"

export default function NavHead() {
  const [toggle,setToggle] = useState(false)
  return (
      <React.Fragment>
    <Navbar expand="md"  className="nav mb-3">
        <div className="container">
          <NavbarBrand href="/" className="logo">Recipe Maker</NavbarBrand>
          <NavbarToggler onClick={()=>setToggle(!toggle)} />
          <Collapse isOpen={toggle} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className ="link" href="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
  )
}
