import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {

  return ( 
    <div className="navbar">
      <h1 id="Myname1"><img src={require('../Image/df.jpg')}/>Dessai</h1>
      <Link id='pages' to="/">Home</Link>
      <Link  id='pages2' to="/about">About</Link>
      <Link  id='pages3' to="/My-Work">My-Work</Link>
      <div id='email'>
        <img src={require('../Image/message1.jpg')}/>
      <a id='email1' href='Kdessaikibeho@gmail.com'>Kdessaikibeho@gmail.com</a>
      </div>
    </div>
    
    
   );
}

 
export default Navbar;
