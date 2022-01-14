import React from 'react';
import Api from '../Api';
import './Login.css';

export default ({onReceiveGF}) => {

    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        if(result) {
            onReceiveGF(result.user);
        } else {
            alert("Não deu certo...");
        }
    }
    
    const handleGoogleLogin = async () => {
        let resultt = await Api.googleLogar();
        if(resultt) {
            onReceiveGF(resultt.user);
        } else {
            alert("Não deu certo...");
        }
    }

    return (
        <div className="login">
            <button onClick={handleGoogleLogin}>Logar com Google</button>
            <button onClick={handleFacebookLogin}>Logar com Facebook</button>
        </div>
    )

}