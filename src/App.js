import logo from './logo.svg';
import './App.css';
import TestCom01 from './components/TestCom01';
import TestCom02 from './components/TestCom02';
import TestCom03 from './components/TestCom03';
import { Route, Routes } from 'react-router-dom';
import IndexCon from './containers/IndexCon';
import LoginCon from './containers/LoginCon';

function App() {
  return (<>
  <Routes>
    <Route path="/" element={<IndexCon />} />
    <Route path="/login" element={<LoginCon />} />
  </Routes>
  {/*
    <TestCom03 name="홍길동" />
    <hr />
    <TestCom02 />
    <hr />
    <TestCom01 />
  */}
    </>);
}

export default App;
