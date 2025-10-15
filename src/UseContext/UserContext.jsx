import {  useState } from "react";
import { UserContext } from "./Context";


// export const UserContext=createContext()

const UserProvider=({children})=>{
    const [name,setName]=useState("")
return(
<UserContext.Provider value={{name,setName}}>
    {children}
</UserContext.Provider>
)
}

export default UserProvider