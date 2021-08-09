
import React, { useState } from 'react';
import ResponseModal from '../components/response_nodal/responseModal';


function Auth(props) {
    const [form, setForm] = useState({
        name: "",
        password: ""
    })
    const [error, setError] = useState("")
    const [response, setResponse] = useState("")

    function inputChange(e) {
        setError("");
        setResponse("");
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    async function request(url) {
        props.setLoading(true);
        try {
            const res = await fetch(`https://word-study-server.herokuapp.com${url}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            const data = await res.json();

            if (!res.ok) {
                setError(data.message);
                props.setLoading(false);
                return;
            }

            props.setLoading(false);
            return data;

        } catch (e) {
            setError(`ошибка при регистрации ${e}`)
        }
    }

    async function registration() {
        const data = await request("/api/registr");
        if (data) {
            setResponse(`${data.message}, нажмите войти чтобы перейти на главную`)
        }

    }

    async function login() {
        const data = await request("/api/login");
        if (data) {
            props.setToken(data.token);
            localStorage.setItem("UserToken", data.token);
        }

    }

    return (
        <>
            {
                props.loading

                    ? <div className="loader">
                        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </div>

                    : <div className="Auth">
                        <small>имя</small>
                        <input
                            name="name"
                            onChange={inputChange}
                            value={form.name}
                            placeholder="введите имя"
                        />

                        <small>пароль</small>
                        <input
                            name="password"
                            onChange={inputChange}
                            value={form.password}
                            type="password"
                            placeholder="введите пароль" 
                        />

                        <div>
                            <button onClick={registration}>зарегистрироваться</button>
                            <button onClick={login}>войти</button>
                        </div>

                        {response && !props.loading && <ResponseModal type="Response">{response}</ResponseModal>}
                        {error && !props.loading && <ResponseModal type="Error">{error}</ResponseModal>}
                    </div>
            }


        </>
    )
}

export default Auth;