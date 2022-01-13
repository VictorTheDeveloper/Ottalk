import React, { useState } from 'react';
import './NewChat.css';

import { FiArrowLeft } from 'react-icons/fi';

export default ({user, chatlist, show, setShow}) => {

    const [list, setList] = useState([
        {id: 123, avatar: 'https://64.media.tumblr.com/a6b938e577307388e5cbb9fd7e936016/tumblr_otgmlvkI3M1w3rqyeo5_400.png', name: 'Testão'},
        {id: 123, avatar: 'https://64.media.tumblr.com/a6b938e577307388e5cbb9fd7e936016/tumblr_otgmlvkI3M1w3rqyeo5_400.png', name: 'Testão'},
        {id: 123, avatar: 'https://64.media.tumblr.com/a6b938e577307388e5cbb9fd7e936016/tumblr_otgmlvkI3M1w3rqyeo5_400.png', name: 'Testão'},
        {id: 123, avatar: 'https://64.media.tumblr.com/a6b938e577307388e5cbb9fd7e936016/tumblr_otgmlvkI3M1w3rqyeo5_400.png', name: 'Testão'}
    ]);

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="newChat" style={{left: show? 0 : -415}}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                    <FiArrowLeft style={{color: '#FFFFFF'}} />
                </div>
                <div className="newChat--headtitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key)=>(
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemavatar" src={item.avatar}/>
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}