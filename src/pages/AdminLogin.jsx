import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from "../components/LoginForm"

const AdminLogin = () =>{

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const nav = useNavigate()

    const login = async () => {
        const result = await fetch('http://localhost:9898/admin/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, pass })
        })
        if (result.status === 200) {
            const data = await result.json()

            localStorage.setItem('token', data.token)
            nav('/home')
        }


    }
    return (
        <main className="">
            <div className="">
                <div className=""><p>CustomerBoard</p></div>
                <LoginForm login={login} setemail={setEmail} setpass={setPass} />
            </div>

        </main>
    )
    
} 
export default AdminLogin