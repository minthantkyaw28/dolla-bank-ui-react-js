
import './App.css';
// import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home';
import SigninPage from './pages/signin';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">

      
      <Router>
      {/* <Navbar></Navbar> */}
        <Routes>
          <Route path='/' element={<Home></Home>} exact></Route>
          <Route path='/signin' element={<SigninPage></SigninPage>} exact></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
