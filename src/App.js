import './App.css';
import {useEffect} from 'react'
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready(); //приложение полностью проинициализировалось и его можно отрисовывать
  });
  const onClose = () => {
    tg.close();
  }
  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
