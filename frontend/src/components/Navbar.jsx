import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
    // Ensure 'logout' matches the casing used in your AuthProvider
    const { user, logout } = useContext(AuthContext);

    const linkStyle = { marginRight: 10, color: "white", textDecoration: "none" };

    return (
        <nav style={{ padding: 10, background: "#222", color: "white", display: "flex", alignItems: "center" }}>
            <Link to="/" style={linkStyle}>Home</Link>

            {user ? (
                <>
                    <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
                    <button onClick={logout} style={{ cursor: 'pointer' }}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login" style={linkStyle}>Login</Link>
                    <Link to="/register" style={{ color: "white", textDecoration: "none" }}>Register</Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;