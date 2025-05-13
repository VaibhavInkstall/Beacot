import React from 'react'
import { createContext , useState , useContext } from 'react'
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
        const [isSidenavOpen, setIsSidenavOpen] = useState(false);
        const [isDashboardClicked, setIsDashboardClicked] = useState(false);
        const [isProfileClicked, setIsProfileClicked] = useState(false);
        const [isWalletClicked, setIsWalletClicked] = useState(false);
        const [isClassesClicked, setIsClassesClicked] = useState(false);
        const [isCalendarClicked, setIsCalendarClicked] = useState(false);
        const [isMessagesClicked, setIsMessagesClicked] = useState(false);
        const [isStudentsClicked, setIsStudentsClicked] = useState(false);

    return (
        <AuthContext.Provider value={{isSidenavOpen,setIsSidenavOpen,isDashboardClicked,setIsDashboardClicked,isProfileClicked,setIsProfileClicked,isWalletClicked,setIsWalletClicked,isClassesClicked,setIsClassesClicked,isCalendarClicked,setIsCalendarClicked,isMessagesClicked,setIsMessagesClicked,isStudentsClicked,setIsStudentsClicked}}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext)
