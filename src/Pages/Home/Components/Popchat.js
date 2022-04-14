import React, { useState } from 'react'
import './Popchat.css';
import SmartToyIcon from '@mui/icons-material/SmartToy';//import the css here
import { Button } from '@mui/material';

export const PopChat = ( props ) => {
  let hide = {
    display: 'none',
  }
  let show = {
    display: 'block'
  }
  let textRef = React.createRef()
  const {messages} = props

  const [chatopen, setChatopen] = useState(false)
  const toggle = e => {
    setChatopen(!chatopen)
  }

const handleSend = e => {
  const get = props.getMessage
  get(textRef.current.value)
}

  return (
    <div id='chatCon'>
      {/* CHAT WINDOW NEEDS RESIZING <div class="chat-box" style={chatopen ? show : hide}>
    <div class="header">Chat with me</div>
    <div class="msg-area">
      {
        messages.map((msg, i) => (
          i%2 ? (
          <p class="right"><span>{ msg }</span></p>
          ) : (
            <p class="left"><span>{ msg }</span></p>
          )
        ))
      }

    </div>
    <div class="footer">
      <input type="text"  ref={textRef} />
      <button onClick={handleSend}><i class="fa fa-paper-plane"></i></button>
    </div>
  </div> */}
    <div class="pop">
      <Button sx={{ 
        backgroundColor: "#30cddc",
         color: "white",
          borderRadius: 8,
          height: "7vh",
          width: "7vh",
          "&.MuiButtonBase-root:hover": {
            backgroundColor: '#1f74db'
          }
          }}>
        <SmartToyIcon onClick={toggle} alt="" />
      </Button>
    </div>
    </div>
  )
}

export default PopChat