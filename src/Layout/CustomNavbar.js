import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from '../Assets/Logo/Logo.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" variant="light">
    <Container>
    <div>
    <MenuIcon className='navbar-menu-icon'/>
    <Navbar.Brand href="#home">
    
      <img
        alt=""
        src={logo}
        className="d-inline-block align-top brand-icon"
      />{' '}
    </Navbar.Brand>
    </div>
    <div className='navbar-icon-group'>
    <SearchIcon className='navbar-icon'/>
    <ShoppingCartIcon className='navbar-icon'/>
    <AccountCircleIcon className='navbar-icon'/>
    </div>
    </Container>
  </Navbar>
  );
};

export default CustomNavbar;
