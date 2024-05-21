import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <button onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
      {menuOpen && (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new">New Item</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
