import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav
        style={{
          padding: '10px',
          borderBottom: '1px solid #ccc',
          backgroundColor: '#f8f8f8' // light gray background
        }}
      >
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center', // centers the nav links
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}
        >
          <li><Link to="/home" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Home</Link></li>
          <li><Link to="/about" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>About</Link></li>
          <li><Link to="/services" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Services</Link></li>
          <li><Link to="/contact" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
