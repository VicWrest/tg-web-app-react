import './App.css';
import {useEffect} from 'react'
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import ProductList from './components/ProductList/productList';
import Form from './components/Form/form';

function App() {
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready(); //приложение полностью проинициализировалось и его можно отрисовывать
  });
  
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route index element={<ProductList/>}/>
        <Route path={'form'} element={<Form/>}/>
      </Routes>
      
    </div>
  );
  /*<Route index element={<ProductList/>}/> - по корневому пути запускается productList
  <Route path = {'form'} element={<Form/>}/> - по url=form - запускается компонент Form
  */
}

export default App;
