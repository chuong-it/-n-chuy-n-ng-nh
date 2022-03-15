import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Interest from './components/interest/interest';
import Skill from './components/skill/skill';
function App() {
 const  state = {
    name :"Nguyễn Bá Chương",
    date : '22/04/1999',
    skill: '80',
    home: '15 phan Huy Chú - Vinh -Nghệ An',
    address: 'Hà Tĩnh',
    phone: '0373379243',
    email: 'nguyenchuong2204@gmail.com'
  }
  


  return (
    <div className="container">

      <div className="navbar">
        <Link to ="/"><i className="fa fa-home" aria-hidden="true"></i></Link>
        <Link to ="/Skill">KỸ NĂNG</Link>
        <Link to ="/Interest">SỞ THÍCH</Link>
        <Link to ="#contact">ĐỊNH HƯỚNG</Link>
      </div>
      <div className="header">
        <div className="App-main">
          <img src={require('./components/image/ab.jpg')} />

  
          <h2>{state.name}</h2>
          <h3><i className="fa fa-birthday-cake" aria-hidden="true"></i> {state.date} </h3>
          <h3><i className="fa fa-home" aria-hidden="true"></i> {state.home} </h3>
          <h3><i className="fa fa-map-marker" aria-hidden="true"></i> {state.address} </h3>
          <h3><i className="fa fa-phone" aria-hidden="true"></i> {state.phone} </h3>
          <h3><i className="fa fa-envelope" aria-hidden="true"></i> {state.email}</h3>
        </div>
      
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/Skill' element={<Skill/>} />
            <Route path='/Interest' element={<Interest />} />
          </Routes>


      </div>
    </div>
  );
}

export default App;
