import { Children, createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthProvider ({children}) {
    const [user, setUser] = useState(null);

    const contextValue = {
        user,
    };

    return <AuthContext.Provider value={contextValue}>
        {Children}
    </AuthContext.Provider>;
    
}