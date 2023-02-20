import { useRef } from "react";
import "../Styles/main.css";
import { Link } from "react-router-dom";

function Nav() {
    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(   
        
        <header>
            <h2>D e n t a l<br></br>H E L T H</h2>
            <nav ref={navRef}>
          
               
                    <Link to="/">Home</Link>
               
                    <Link to="/About">About</Link>
                
                    <Link to="/Contact">Contact</Link>
               
                    <Link to="/Services">Services</Link>
                
             
                
                {/* USE FOR SMOLLER SCREEN CLOSE THE NAV */}
                <button className="nav-btn nav-close-btn" onClick={showNav}> 
                    <a>*</a>
                </button>
            </nav>




            

            {/* OPEN THE NAV IN SMOLLER SCREEN */}
            <button className="nav-btn" onClick={showNav}>
            <a>--</a>
                </button>
        </header>

        
    );
}

export default Nav;