import React from 'react';
import './ChatListitem.css';

export default ({onClick, active, data}) => {
    return (
        
        <div className={`chatListItem ${active?'active':''}`}
        onClick={onClick}>
            <img className="chatListItem--avatar" src={data.image} alt="foto de perfil" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.title}</div>
                    <div className="chatListItem--date">12:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Ola, amigo vamos conversar sobre interesses em comum de otaku :)</p>
                    </div>
                    
                </div>
            </div>  
        </div>
    );
}