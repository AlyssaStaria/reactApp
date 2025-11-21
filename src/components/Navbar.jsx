import React from 'react';
import './NavBar.css';<a href=""></a>

const Navbar = () => {
  return (
    <nav>
        <ul>
          {/* Loads the default page with a slash */}
            <li><a href="/">Home</a></li>
            <li><a href="/Popular">Popular</a></li>
            <li><a href="/Top">Top Rated</a></li>
            <li><a href="/snack">Concession</a></li>
        </ul>
    </nav>
  );
    
  
}

export default Navbar