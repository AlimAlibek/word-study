import React from "react";
import Main from "../components/Main";

function App(props) {  

    function handleExit() {
        localStorage.removeItem("UserToken");
        props.setToken("");
    }

    async function request(url, method = "GET", body = null) {
        let jsonBody = null;
        if (body) {
            jsonBody = JSON.stringify(body);
        }

        try {
            const res = await fetch(`https://word-study-server.herokuapp.com${url}`, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${props.token}`
                },
                body: jsonBody 
            })
            const data = await res.json();

            if (!res.ok) {
                if (res.status === 400) {
                    handleExit();
                }
                return;
            } 
            return data;
        } catch (e) {
            throw new Error(`ошибка при загрузке данных: ${e.message}`)
        }
    }

    function setData(data) {
        request("/api/setdata", "POST", data);
    }

    async function getData() {
        const data = await request("/api/getdata");
        return data;
    }

    return (
        <>
        <div className="Exit">
            <button onClick={handleExit}>exit</button>
        </div>
        <Main
            setData={setData}
            getData={getData}
        />
            
        </>
    )
    
}

export default App;
