import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from "../components/LoginForm"

const AdminLogin = () =>{

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()

    const login = async () => {
        const result = await fetch('http://localhost:9898/admin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        if (result.status === 200) {
            const data = await result.json()

            localStorage.setItem('token', data.token)
            nav('/admin/dashboard')
        }


    }
    return (
        <main className="">
            <div className="">
                <div className=""><p>DashBoard</p></div>
                <LoginForm login={login} setusername={setUsername} setpassword={setPassword} />
            </div>

        </main>
    )
    
} 
export default AdminLogin