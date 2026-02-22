import { useState, useContext } from 'react';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState(""); // Track login errors
    
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        try {
            const { data } = await API.post("/auth/Login", form);
            login(data);
            navigate("/dashboard");
        } catch (err) {
            // Display the message from your backend if it exists
            setError(err.response?.data?.message || "Login failed. Check your credentials.");
        }
    };

    return (
        <div className='login-container'>
            <h2>Login</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" // Better for mobile validation
                    placeholder='Enter Your Email Here'
                    value={form.email} // Controlled component
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                />

                <input 
                    type='password'
                    placeholder='Enter your password here'
                    value={form.password} // Controlled component
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;