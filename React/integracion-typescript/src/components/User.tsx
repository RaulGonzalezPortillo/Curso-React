import React from 'react'
import { useState } from 'react'

interface userInterface {
    uid: string;
    name: string;
}

export const User = () => {
    const [user, setUser] = useState<userInterface>();

    const login = () => {
        setUser({
            uid: 'ABCD123',
            name: 'Raúl'
        })
    }

    return (
        <div className="mt-5">
            <h3>User: useState</h3>
            {
                (!user)
                    ? <pre className="text-white">Unauthenticated user</pre>
                    : <pre className="text-white">{ JSON.stringify(user) }</pre>                    
            }
            <button
                onClick={ login }
                className="btn btn-success "
            >
                Login
            </button>
        </div>
    )
}
