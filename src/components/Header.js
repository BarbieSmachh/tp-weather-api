import React from 'react'
import logo from "../logo_transparent.png";

function Header() {

    let imgElement = document.createElement('img');
    imgElement.setAttribute("src", logo);
    imgElement.setAttribute("alt", "logo");



  return (
    <>
    <section className='header'>
    <img class='App-logo' src={logo} />
    </section>
    </>
  )
}

export default Header
