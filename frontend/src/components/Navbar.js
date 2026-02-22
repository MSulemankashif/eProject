import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
    const { user, Logout } = useContext(AuthContext);

    return (
        <nav style={{padding: 10, background: "#222", color: "white"}}>
            <Link to={"/"} style={{marginRight: 10}}>Home</Link>

            {
             user ? (
                <>
                <Link to={"/dashboard"} style={{marginRight: 10}}>Dashboard</Link>
                <button onClick={Logout}>Logout</button>
                </>
             )   : (
                <>
                <Link to={"/login"} style={{marginRight: 10}}>Login</Link>
                <Link to={"/register"}>Register</Link>
                </>
             )}
        </nav>
    );
}

export default Navbar;