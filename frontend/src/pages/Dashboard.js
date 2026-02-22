import {useContext} from 'react';
import { AuthContext} from "../context/AuthContext";

function Dashboard() {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome back, {user?.name}</p>
            <p>Role: {user?.role}</p>
        </div>
    );
}

export default Dashboard;