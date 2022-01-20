import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';

import MessageItem from './MessageItem';
import Api from '../Api';

import { MdOutlineAttachFile } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineMore } from 'react-icons/ai';
import { BiSmile } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSend } from 'react-icons/bi';
import { BsMic } from 'react-icons/bs';

export default ({user, data}) => {

    const body = useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const[emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        
        setList([]);
        let unsub = Api.onChatContent(data.chatId, setList, setUsers);
        return unsub;

    }, [data.chatId]);

    useEffect(()=>{
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;  //Fazer sempre estar lá no final do chat (joga para baixo)
        }
        
    }, [list]);

    const handleEmojiClick = (e, emojiObject) => {
        setText( text + emojiObject.emoji );
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }
    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }
    const handleMicClick = () => {
        if(recognition !== null) {
            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText( e.results[0][0].transcript );
            }

            recognition.start();
        }
    }
    const handleInputKeyUp = (e) => {
        if(e.keyCode == 13) {
            handleSendClick();
        }
    }

    const handleSendClick = () => {
        if(text !== '') {
            Api.sendMessage(data, user.id, 'text', text, users);
            setText('');
            setEmojiOpen(false);
        }
    }

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src={data.image} alt="" />
                    <div className="chatWindow--name">{data.title}</div>
                </div>
                <div className="chatWindow--headerbuttons">
                    <div className="chatWindow--btn">
                        <BiSearch style={{color: '#919191'}} />   
                    </div>
                    <div className="chatWindow--btn">
                        <MdOutlineAttachFile style={{color: '#919191'}} />   
                    </div>
                    <div className="chatWindow--btn">
                        <AiOutlineMore style={{color: '#919191'}} />   
                    </div>
                </div>
            </div>
            <div ref={body} className="chatWindow--body">
                {list.map((item, key)=>(
                    <MessageItem
                        key={key}
                        data={item}
                        user={user}
                        />
                ))}
            </div>
            <div className="chatWindow--emojiarea"  style={{height: emojiOpen ? '200px' : '0px'}}>
                <EmojiPicker 
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker/>
            </div>
            <div className="chatWindow--footer">
                <div className="chatWindow--pre">
                    <div className="chatWindow--btn" onClick={handleCloseEmoji} style={{width: emojiOpen?40:0}}>
                        <AiOutlineClose style={{color: '#919191'}} />   
                    </div>
                    <div className="chatWindow--btn" onClick={handleOpenEmoji}>
                        <BiSmile style={{color: emojiOpen?'#009688':'#919191'}} />   
                    </div>

                </div>
                <div className="chatWindow--inputarea">
                    <input className="chatWindow--input" type="text" placeholder="Digite sua mensagem"
                    value={text} onChange={e=>setText(e.target.value)}
                    onKeyUp={handleInputKeyUp}
                    />
                </div>
                <div className="chatWindow--pos">
                    {text === '' && 
                    <div onClick={handleMicClick} className="chatWindow--btn">
                        <BsMic style={{color: listening ? '#126ECE' : '#919191'}} />   
                    </div>
                    }
                    {text !== '' && 
                    <div onClick={handleSendClick} className="chatWindow--btn">
                        <BiSend style={{color: '#919191'}} />   
                    </div>
                    }
                </div>
                
            </div>
            
        </div>
    )
}