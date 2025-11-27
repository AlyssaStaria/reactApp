import React from "react";

import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {

return (

<nav>

<ul>

<li>

<Link to="/">Home</Link>

</li>

<li>

<Link to="/snack">Candy</Link>

</li>

<li>

<Link to="/Popular">Popular</Link>

</li>

<li>

<Link to="/Top">Top Rated</Link>

</li>

</ul>

</nav>

 );

};

export default Navbar;