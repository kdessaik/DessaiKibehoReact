import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {

  return ( 
    <div className="navbar">
      <h1 id="Myname1"><img src={require('../Image/df.jpg')}/>Dessai</h1>
      <div id='Nav-elements'>
      <a href=''> <h4><Link id='kdk' to="/">Home</Link></h4></a>
      <a href=''><h4><Link id='kdk' to="/about">About</Link></h4></a>
      <a href=''><h4><Link id='kdk' to="/contact">Portfolio</Link></h4></a>
      <a href=''><h4>Pages</h4></a>
      <a href=''> <button className='btn btn-primary' id='donate'> Donate </button></a>
      
      </div>
      <div id='email'>
        <img src={require('../Image/message1.jpg')}/>
      <a id='email1' href='Kdessaikibeho@gmail.com'>Kdessaikibeho@gmail.com</a>
      </div>
    </div>
    
    
   );
}

 
export default Navbar;
