import React, { useCallback, useEffect, useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram';
import './form.css';

const Form = () => {
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('physical')
    const{tg} = useTelegram();

    const onSendData = useCallback(() => {
        console.log(country);
        const data = {
            country, 
            street, 
            subject
        }
        tg.sendData(JSON.stringify(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    })
    useEffect(() => {
        tg.MainButton.setParams({
            text: "Отправить данные"
        })
        //строка ниже пишется для того, чтобы не было ошибки отсутствующапя зависимость
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() =>{
        if(!street || !country){
            tg.MainButton.hide();
        }
        else{
            tg.MainButton.show();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [country, street]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }
  return (
    <div className={'form'}>
        <h3>Введите ваши данные</h3>
            <input 
                className={'input'} 
                type="text" 
                placeholder={'Страна'} 
                value={country}
                onChange={onChangeCountry}
            />
            <input 
                className={'input'} 
                type="text" 
                placeholder={'Улица'}
                value={street}
                onChange={onChangeStreet}
                />
    <select value={subject} onChange={onChangeSubject}>
        <option value={'physical'}>Физ.лицо</option>
        <option value={'legal'}>Юр.лицо</option>
    </select>
    </div>
  );
}

export default Form;