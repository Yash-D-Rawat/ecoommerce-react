import Upheader from "./Upheader";
import './header.css'

function Header({count}){
    return (
        <nav className="navbar">
            <Upheader count = {count}/>
        </nav>
    );
};

export default Header;