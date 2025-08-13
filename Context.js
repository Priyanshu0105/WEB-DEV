import { createContext ,useContext } from "react";
export const contextlearn = React.createContext({})

export const contextuse = () => {
    return useContext(contextlearn)
}

export const contextprovider = contextlearn.Provider;