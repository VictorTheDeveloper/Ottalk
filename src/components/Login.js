import React from 'react';
import Api from '../Api';
import './Login.css';

export default () => {

    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        if(result) {

        } else {
            alert("Não deu certo...");
        }
    }

    return (
        <div className="login">
            <button onClick={handleFacebookLogin}>Logar com Facebook</button>
        </div>
    )
}