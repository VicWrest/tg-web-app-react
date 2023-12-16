import React from 'react'
import Button from '../Button/Button'

const Header = () => {
    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close();
      }
      
  return (
    <div className={'header'}>
        <Button onClick={onClose}>Закрыть</Button>
        <span className={'username'}>
            {tg.initDataUnsave?.user?.username}    
        </span> //span - строчный элемент, для выбора части текста 
        
    </div>
  );
}

export default Header;