import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banking from './components/Banking';
import Header from './components/Header';
import Items from './components/Items';
import Main from './components/Main';
import SideBar from './components/SideBar';

function App() {
  return (
    <div>
      <Header/>
      <div className='row'>
          <div className="col-3">
              <SideBar/>
          </div>
          <div className="col-9">
          <Routes>
            <Route path='/home' element={<Main/>} />
            <Route path='/items' element={<Items/>} />
            <Route path='/banking' element={<Banking/>} />
          </Routes>
          </div>
      </div>
    </div>
  );
}

export default App;
