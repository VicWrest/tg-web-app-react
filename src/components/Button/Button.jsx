import React from 'react'
const tg = window.Telegram.WebApp;

const Button = (props) => {
  return (
        <button {...props} className={'button ' + props.className}>
            
        </button>
  );
}

export default Button;