import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Banner from './Banner'; // Import the Banner component

const Navbar = () => {
    const productsState = useSelector(state => state.products.products);
    const servicesState = useSelector(state => state.services.services);

    const productCount = productsState.reduce((total, product) => total + product.qty, 0);
    const serviceCount = servicesState.reduce((total, service) => total + service.qty, 0);

    return (
        <>
            <Banner />
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 sticky-top ">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> 
                        <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" style={{ height: '50px' }} />
                    </NavLink>
                    <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto my-2 text-center">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Hem</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/product">Rehab produkter</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/MRI">MRI-services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Om oss</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Kontakta oss</NavLink>
                            </li>
                        </ul>
                        <div className="buttons text-center">
                            <NavLink to="/bookappointment" className="btn btn-dark m-2"><i></i> Boka tid </NavLink>
                            <NavLink to="/cart?type=products" className="btn m-2"><i className="fa fa-cart-shopping mr-1"></i> Product Cart ({productCount})</NavLink>
                            <NavLink to="/cart?type=services" className="btn m-2"><i className="fa fa-cart-shopping mr-1"></i> Service Cart ({serviceCount})</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

