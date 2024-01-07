import React, { useCallback, useEffect, useState } from 'react'
import './productList.css';
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from '../../hooks/useTelegram';

const products = [
  {id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые'},
  {id: '2', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая'},
  {id: '3', title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые'},
  {id: '4', title: 'Куртка 8', price: 122, description: 'Зеленого цвета, теплая'},
  {id: '5', title: 'Джинсы 3', price: 5000, description: 'Синего цвета, прямые'},
  {id: '6', title: 'Куртка 7', price: 600, description: 'Зеленого цвета, теплая'},
  {id: '7', title: 'Джинсы 4', price: 5500, description: 'Синего цвета, прямые'},
  {id: '8', title: 'Куртка 5', price: 12000, description: 'Зеленого цвета, теплая'},
]


const getTotalPrice = items =>{
  return items.reduce((acc, item) => {
    return acc += item.price;
  }, 0)
}; 

const ProductList = () => {
  //отправка данныx

  const{tg} = useTelegram();
  const [addedItems, setAddedItems] = useState([])

  const onSendData = useCallback(() => {
    const data = {
        products: addedItems,
        totalPrice: getTotalPrice(addedItems)
    }
    fetch('http://localhost:8000/web-data', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data)
    });
    tg.sendData(JSON.stringify(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addedItems]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
        tg.offEvent('mainButtonClicked', onSendData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSendData]);

  const onAdd = (product) => { //добавление товара в корзину
    const alreadyAdded = addedItems.find(item => item.id === product.id);
    let newItems = [];

    if(alreadyAdded){
      newItems = addedItems.filter(item => item.id !== product.id) //убираем повторяющиеся элементы
    }
    else{
      newItems = [...addedItems, product];
    }
    setAddedItems(newItems);

    //если товаров в корзине нет, то скрываем кнопку "Купить"
    if(newItems.length === 0){ 
      tg.MainButton.hide()
    }
    else{
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить за ${getTotalPrice(newItems)}`
      })
    }
  }

  return (
    <div className={'list'}>
      {products.map(item => (
        <ProductItem
          product={item}
          onAdd={onAdd}
          className={'item'}
        />
      )
      )}
        
    </div>
  );
}

export default ProductList;