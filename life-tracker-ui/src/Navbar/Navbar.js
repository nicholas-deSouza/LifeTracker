import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar(){

    return (   
          
        <nav className="navBar"> 

         
          <Link to={"/"}>
              <img
                alt="codepath logo"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fchronus-mentor%2Fprograms%2Flogos-new%2F1433%2Foriginal.png%3F1574899383&f=1&nofb=1"
              />
          </Link>
        

            <ul className="links">
              <div >Activity</div>
              <div  >Exercise</div>
              <div  >Nutrition</div>
              <div  >Sleep</div>
              
            </ul>
            <div className="nav-buttons">
              <Link to="/login">
                <button className="btn primary">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn primary">Register</button>
              </Link>
            </div>

      </nav>
    )
 

}
