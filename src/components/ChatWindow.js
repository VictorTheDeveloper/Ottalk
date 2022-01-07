import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';

import { MdOutlineAttachFile } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineMore } from 'react-icons/ai';
import { BiSmile } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSend } from 'react-icons/bi';
import { BsMic } from 'react-icons/bs';

export default () => {

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const[emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);

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
    const handleSendClick = () => {

    }

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://i.pinimg.com/originals/e6/f9/2c/e6f92c6fc942943a462855a3a7e4f893.jpg" alt="" />
                    <div className="chatWindow--name">Victor Test</div>
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
            <div className="chatWindow--body">
                
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
                    value={text} onChange={e=>setText(e.target.value)} />
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