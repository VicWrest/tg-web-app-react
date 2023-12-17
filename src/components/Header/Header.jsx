import React from 'react'
import Button from '../Button/Button'
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {
  const {user, onClose} = useTelegram();
      
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