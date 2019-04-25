import React from 'react'
import NavHead from './Navbar';
import Footer from './Footer';

export default function Main(props) {
  return (
    <React.Fragment>
        <NavHead/>
        <div className="container">
      {props.children}
        </div>
        <Footer/>
    </React.Fragment>
  )
}
