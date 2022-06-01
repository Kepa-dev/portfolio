import React from "react";
import { useState, useEffect } from "react";

let Cookie_alert = () => {
    let [allowCookies, setcookies] = useState(false);
    let currentcookies = "";
    useEffect(() => {
        let currentcookies = document.cookie;
        
        let accept = "acceptedfromReact"
        let listcookies = currentcookies.split(';');
        for(let i = 0; i < listcookies.length; i++){
            listcookies[i] = listcookies[i].trim();
        }
        
        let isaccept = listcookies.indexOf('acceptedfromReact');
        document.cookie = accept;
        if (isaccept != -1) {
            setcookies(true);
            
        }
    }, [])

    let changecookies = () => {
        setcookies(true);
        let newcookie = currentcookies + ';acceptedfromReact;'
        document.cookie += ';acceptedfromReact;';
    };


    if (!allowCookies) {
        return (
            <div>
                <div className=" mx-5 my-1 alert alert-danger" role="alert">
                    <div className="d-flex w-100">
                        <div className="ms-5 w-75">
                            <i class="bi bi-exclamation-octagon-fill"></i>
                            <label className="mb-2">&nbsp;Aplikacja do poprawnego działania wykorzystuje pliki cookies!</label><br />
                            <button onClick={changecookies} type="button" className=" btn btn-success">Rozumiem</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return ('');
    }
}

export default Cookie_alert;