import React from 'react'
import logo from '../../assets/logo.svg';
import './styles.css';

function Header() {
  return (
    <header>
      <div className='header-logo-container'>
        <img src={logo} alt="Logo" />
        <h1>Product Catalog</h1>
        <p>
          Desenvolvido por
          <a href="https://www.linkedin.com/in/jhonataluiz/"> Jhonata Luiz</a>
        </p>
      </div>

    </header>

  )
}

export default Header