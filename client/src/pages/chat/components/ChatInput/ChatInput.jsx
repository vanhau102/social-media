import { useState } from 'react';
import { BsEmojiSmileFill } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import Picker from 'emoji-picker-react';

import './chatInput.scss';
function ChatInput() {
    const [msg, setMsg] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const handleEmojiPickerhideShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };
    const handleEmojiClick = (event, emojiObject) => {
        let message = msg;
        console.log(emojiObject);
        // message += emojiObject.emoji;
        // setMsg(message);
    };
    const sendChat = (event) => {
        event.preventDefault();
        if (msg.length > 0) {
            //   handleSendMsg(msg);
            console.log(msg);
            setMsg('');
        }
    };
    return (
        <div className='chatInput'>
            <div className='button-container'>
                <div className='emoji'>
                    <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
                    {showEmojiPicker && (
                        <Picker onEmojiClick={handleEmojiClick} />
                    )}
                </div>
            </div>
            <form
                className='input-container'
                onSubmit={(event) => sendChat(event)}
            >
                <input
                    type='text'
                    placeholder='type your message here'
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
                />
                <button type='submit'>
                    <IoMdSend />
                </button>
            </form>
        </div>
    );
}

export default ChatInput;
