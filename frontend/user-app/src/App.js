import React, { useEffect, useState } from 'react'

const App = () => {
    const [user, setUser] = useState([])

    const getUser = () => {
        fetch("/api/user")
            .then(res => res.json())
            .then(json => setUser(json))
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div>
            {user.map((data) => (
                <div>
                    <h1>{data.Id}</h1>
                    <h1>{data.Name}</h1>
                    <h1>{data.Type}</h1>
                </div>
            ))}
        </div>
    )
}

export default App
