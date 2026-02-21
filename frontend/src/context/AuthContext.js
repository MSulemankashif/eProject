import { Children, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children}) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

}