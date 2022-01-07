import React from 'react';
import './ChatWindow.css';

import { MdOutlineAttachFile } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineMore } from 'react-icons/ai';

export default () => {
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
            <div className="chatWindow--footer">
                
            </div>
            ...
        </div>
    )
}