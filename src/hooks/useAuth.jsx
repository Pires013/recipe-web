import { useState } from "react"

export const useAuth = (onLoginSucess) => {
    const[mensagem, setMensagem] = useState("")

    const login = async (email, senha) => {
        const resp = await fetch("http://localhost:8080/usuarios/login", {
            method: "Post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, senha}),
        });
        if(resp.ok) {
            setMensagem("Login bem-sucedido!");
            onLoginSucess();
        }else {
            setMensagem("Crendenciais invalidas!");
        }
    };

      const cadastrar = async (email, senha) => {
        const resp = await fetch("http://localhost:8080/usuarios/cadastrar", {
            method: "Post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, senha}),
        });
        setMensagem(resp.ok ? "Usuario cadastrado" : "Erro ao cadastrar")
        }

    return {mensagem, login, cadastrar}

}
