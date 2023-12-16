import './App.css';
import {useEffect} from 'react'

function App() {
  useEffect(() => {
    tg.ready(); //приложение полностью проинициализировалось и его можно отрисовывать
  });
  
  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
