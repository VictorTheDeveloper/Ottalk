import React, { useState, useEffect} from 'react';
import './App.css';

import ChatListitem from './components/ChatListitem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Login from './components/Login';

import { BsFillChatRightTextFill } from 'react-icons/bs';
import { AiOutlineMore } from 'react-icons/ai';
import { MdDonutLarge } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import Api from './Api';

export default () => {

    const [chatlist, setChatList] = useState([
        {chatId: 1, title: 'Nome', image: 'https://i.pinimg.com/originals/e6/f9/2c/e6f92c6fc942943a462855a3a7e4f893.jpg'},
        {chatId: 2, title: 'Nome', image: 'https://i.pinimg.com/originals/e6/f9/2c/e6f92c6fc942943a462855a3a7e4f893.jpg'},
        {chatId: 3, title: 'Nome', image: 'https://i.pinimg.com/originals/e6/f9/2c/e6f92c6fc942943a462855a3a7e4f893.jpg'},
        {chatId: 4, title: 'Nome', image: 'https://i.pinimg.com/originals/e6/f9/2c/e6f92c6fc942943a462855a3a7e4f893.jpg'}
    ]);
    const [activeChat, setActiveChat] = useState({});
    const [user, setUser] = useState(null);

    const [showNewChat, setShowNewChat] = useState(false);

    const handleNewChat = () => {
        setShowNewChat(true);
    }

    const handleLoginData = async (u) => {
        let newUser = {
            id: u.uid,
            name: u.displayName,
            avatar: u.photoURL
        };
        await Api.addUser(newUser);
        setUser(newUser);
    }

    if(user === null) {
        return (<Login onReceiveGF={handleLoginData} />);
    }

    return (
        <div className="app-window">
            <div className="sidebar">
                <NewChat 
                    chatlist={chatlist}
                    user={user}
                    show={showNewChat}
                    setShow={setShowNewChat}
                />
                <header>
                    <img className="fotoPerfil" src={user.avatar} alt="foto de perfil" />
                    <div className="botoesPerfil">
                        <div className="btnPerfil">
                            <MdDonutLarge style={{color: '#919191'}} />
                        </div>
                        <div onClick={handleNewChat} className="btnPerfil">
                            <BsFillChatRightTextFill style={{color: '#919191'}} />
                        </div>
                        <div className="btnPerfil">
                            <AiOutlineMore style={{color: '#919191'}} />
                        </div>
                    </div>
                </header>
            
                <div className="search">
                    <div className="search--input">
                        <BiSearch fontSize="small" style={{color: '#919191'}} />
                        <input type="search" placeholder='Procurar ou começar uma nova conversa'></input>
                    </div>
                </div>
                <div className="chatlist">
                    {chatlist.map((item, key)=>(
                        <ChatListitem 
                        key={key}
                        data={item}
                        active={activeChat.chatId === chatlist[key].chatId}
                        onClick={()=>setActiveChat(chatlist[key])}
                        />
                        

                    ))};
                </div>
            </div>
            <div className="contentarea">

                {activeChat.chatId !== undefined && 
                    <ChatWindow 
                    user={user}
                    />
                }
                {activeChat.chatId === undefined && 
                    <ChatIntro 
                      
                    />
                }
            </div>
        </div>
    );
}