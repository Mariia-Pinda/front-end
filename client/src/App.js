import React, {useContext, useEffect, useState} from 'react';
import AppRouter from "./components/AppRouter";
import {Navbar, Spinner} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";

function App() {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }
    return (
        <div>
            <AppRouter/>
        </div>
    );
}

export default App;
