import { Link } from "react-router-dom"
import './header.css'

function Routing(){
    return (
        <div className='navlink'>
            <ul className='list'>
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/pages'>pages</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
            </ul>

          </div>
    );
}

export default Routing;