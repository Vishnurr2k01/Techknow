import React, { useContext } from 'react'
import { AuthContext, firebseContext } from '../../store/firebasecontext'
import '../stylesheet/navigation.css'
function Navigation() {
    const {user} = useContext(AuthContext)
    const {Firebase} = useContext(firebseContext)
    return (
        <div className="navigation">
            <h2>

                {user ? user.displayName : "Login"}
                
            </h2>
            {user && (
            <span
              onClick={() => {
                Firebase.auth().signOut();
                window.location.href = "/login"
              }}
            >
              Logout
              
            </span>
          )}
        </div>
    )
}

export default Navigation
