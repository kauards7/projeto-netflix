import React from "react";


function Login () {
    return(
        <div className="login-container" style={{ backgroundImage: 'linear-gradient(to right, rgb(10, 10, 10), rgb(18, 18, 18), rgb(22, 22, 22))' }}>
            <form className="login-form">
            <label for="name">Usuário</label>
            <input type="text" id="username" name="username" />

            <label></label>

            <label for="password">Senha</label>
            <input type="password" id="password" name="password" />

            <button>Entrar</button>
            </form>
        </div>
    )
}

export default Login;