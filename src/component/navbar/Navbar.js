import {Link
} from "react-router-dom";
function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
              <li class="nav-item">
                 <Link  class="nav-link" to="/">Home</Link>
                </li>                
                <li class="nav-item">
                 <Link class="nav-link" to="/login">Login</Link>
                </li>
                <li class="nav-item">
                 <Link class="nav-link"  to="/task">Task</Link>
                </li>
                
               </ul>
            </div>
          </div>
        </nav>  
        </div>
    )
}
export default Navbar;
