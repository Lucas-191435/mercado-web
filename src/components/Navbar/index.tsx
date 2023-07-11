import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul style={{listStyle: 'none'}}>
      <li>
        <Link to="/usuarios">usuarios</Link>
      </li>
      
      <li>
        <Link to="/mercadorias">mercadorias</Link>
      </li>
      <li>
        <Link to="/embalagens">embalagens</Link>
      </li>
      <li>
        <Link to="/lojas">lojas</Link>
      </li>
      <li>
        <Link to="/vendedores">vendedores</Link>
      </li>
      <li>
        <Link to="/estoque">estoque</Link>
      </li>
    </ul>
  )
}

export default Navbar