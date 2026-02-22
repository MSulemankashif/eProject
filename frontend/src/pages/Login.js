import { useState, useContext} from 'react';
import API from '../api/axios';
import { useNavigate} from 'react-router-dom';
import { AuthContext} from '../context/AuthContext';

function Login(){
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {data} = await API.post("/auth/Login", form);

        login(data);
        navigate("/dashboard");
    };


    return (
        <div className='login-container'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='Enter Your Email Here'
                    onChange={(e)=>{
                        setForm({...form, email: e.target.value})
                    }}
                />

                <input 
                    placeholder='Enter your password here'
                    type='password'
                    onChange={(e)=>{
                        setForm({...form, password: e.target.value})
                    }}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;