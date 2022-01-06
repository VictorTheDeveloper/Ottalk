import React from 'react';
import './App.css';

import { BsFillChatRightTextFill } from 'react-icons/bs';
import { AiOutlineMore } from 'react-icons/ai';
import { MdDonutLarge } from 'react-icons/md';

export default () => {
    return (
        <div className="app-window">
            <div className="sidebar">

                <header>
                    <img className="fotoPerfil" src="https://64.media.tumblr.com/a6b938e577307388e5cbb9fd7e936016/tumblr_otgmlvkI3M1w3rqyeo5_400.png" alt="foto de perfil" />
                    <div className="botoesPerfil">
                        <div className="btnPerfil">
                            <MdDonutLarge style={{color: '#919191'}} />
                        </div>
                        <div className="btnPerfil">
                            <BsFillChatRightTextFill style={{color: '#919191'}} />
                        </div>
                        <div className="btnPerfil">
                            <AiOutlineMore style={{color: '#919191'}} />
                        </div>
                    </div>
                </header>
            
                <div className="search">
                    ...
                </div>
                <div className="chatlist">
                    ...
                </div>
            </div>
            <div className="contentarea">
            ...
            </div>
        </div>
    );
}