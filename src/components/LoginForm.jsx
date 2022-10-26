const LoginForm = (props) => {
    return (
        <>
            <input onChange={(e) => { props.setusername(e.target.value) }} type="text" placeholder="Dein Username" />
            <input onChange={(e) => { props.setpassword(e.target.value) }} type="password" placeholder="Dein Passwort" />
            <button onClick={props.login}>Anmelden</button>
        </>
    )
}
export default LoginForm