import { useState } from "react";
import { createContext } from "react";


const ReloadContext = createContext("")

export const ReloadContextProvider = ({ children }) => {

    const [reload, setReload] = useState(false)

    return (
        <ReloadContext.Provider value={{ reload, setReload }}>
            {children}
        </ReloadContext.Provider>
    )
}

export default ReloadContext;