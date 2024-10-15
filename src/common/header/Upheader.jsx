import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import Routing from './Routing';
import { Link } from "react-router-dom"

function Upheader({count}) {
    return (
        <div className="up-header">
            <img src="./images/header-logo.png" alt="logo" className='header-logo' />
            {/* <p>Yash Rawat</p> */}
            <div className="searchbar">
                <FontAwesomeIcon icon={faSearch} className='icons' />
                <input type="text" className='searchtext' placeholder='Search products' />
            </div>

            <Routing />


            <div className="nav-extras">
                <FontAwesomeIcon icon={faSearch} className='icons' id='responsive-search' />
                
                <Link to = 'cart'>
                <div className="round-div" id='shop-div'>
                    <FontAwesomeIcon icon={faCartShopping} className='icons' id='shop' />
                    <div className="count">{count}</div>
                </div>
                </Link>
                <div className="round-div" id='user-div'>
                    <FontAwesomeIcon icon={faUser} className='icons' id='user' />
                </div>
                
                <FontAwesomeIcon icon={faBars} className='icons' id = 'menu'/>
            </div>
            
        </div>
    );
}

export default Upheader;