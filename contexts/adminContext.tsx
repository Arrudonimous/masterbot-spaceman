'use client'

import { createContext, useMemo, useState, ReactNode } from "react"

interface AdminProviderProps{
    children: ReactNode;
}

interface DataTypes{
    isAdmin: boolean;
    setIsAdmin: any;
}

export const AdminContext = createContext({} as DataTypes);

export default function AdminProvider({ children } : AdminProviderProps){
    const [isAdmin, setIsAdmin ] = useState(false);

    const value = useMemo(()=>({
        isAdmin,
        setIsAdmin
    }),[isAdmin, setIsAdmin])

    return(
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )
}