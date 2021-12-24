

import { createContext,useContext,useState ,useEffect} from "react";
import { auth } from "../firebase/config";

export const firebseContext = createContext(null);
export const AuthContext = createContext(null);

export function useAuth(){
    return useContext(AuthContext)
}

export default function Context({children}){

const [user,setUser] = useState(null);

function signup(email,password){
    return auth.createUserWithEmailAndPassword(email,password)
}

useEffect(() => {
 const unsubscribe = auth.onAuthStateChanged(usera=>{
        setUser(usera)
    })
    return unsubscribe
}, [])


const value = {
    user
}

return(
<AuthContext.Provider value={value}>
    {children}
</AuthContext.Provider>

)

}