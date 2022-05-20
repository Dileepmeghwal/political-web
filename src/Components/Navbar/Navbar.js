import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Style.css';
import Logo from '../Images/logo.png'

const Navbar = () => {
    return (
        <div>
            <header className=''>
                <nav class="navbar container navbar-expand-lg navbar-light bg-light justify-content-center" id="navigation">
                    <NavLink to='/'>
                        <a class="navbar-brand" href="#">
                            <div className='nav-img'>
                                <img src={Logo} alt='logo' />
                            </div>
                        </a>
                    </NavLink>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav  mr-auto">
                            <NavLink to='/'>
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                            </NavLink>
                            <NavLink to='/about'>
                                <li class="nav-item navline">
                                    <a class="nav-link onhover" href="#">About<span class="sr-only">(current)</span></a>
                                </li>
                            </NavLink>
                            <NavLink to='/'>
                                {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li> */}
                            </NavLink>
                            <NavLink to='/press'>
                                <li class="nav-item">
                                    <a class="nav-link " href="#">Press Realese</a>
                                </li>
                            </NavLink>
                            {/* <NavLink to='/consitituency'>
                            <li class="nav-item">
                                <a class="nav-link " href="#">Consitituency</a>
                            </li>
                            </NavLink> */}
                            <NavLink to='/photo'>
                                <li class="nav-item">
                                    <a class="nav-link " href="#">Photo Gallery</a>
                                </li>
                            </NavLink>
                            <NavLink to='/contact'>
                                <li class="nav-item">
                                    <a class="nav-link " href="#">Contact</a>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar