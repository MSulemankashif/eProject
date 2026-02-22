import { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import { Navigate } from 'react-router-dom';

function Dashboard() {
    const { user, loading } = useContext(AuthContext); // Added 'loading' if your context supports it

    // 1. Handle Loading (optional but recommended)
    if (loading) return <div>Loading...</div>;

    // 2. Redirect if not authenticated
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Dashboard</h2>
            <hr />
            <p><strong>Welcome back,</strong> {user.name}</p>
            <p><strong>Role:</strong> {user.role}</p>
        </div>
    );
}

export default Dashboard;