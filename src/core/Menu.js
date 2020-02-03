import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return{color: '#ff9900'};
    } else {
        return {color: '#fff'};
    }
};

const Menu = ({ history }) =>(
     <div>
         
 <nav className="navbar navbar-expand-md bg-primary navbar-dark">

        
      <Link className="navbar-brand" to="/"> Name of Ese </Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
   <div className="collapse navbar-collapse" id="collapsibleNavbar">

   <ul className="navbar-nav">
   <li className = "nav-item">
     <Link
      className ="nav-link"  
      style={isActive(history, "/about")}  
      to="/about"
      >
      About
      </Link>
 </li>
 

 <li className = "nav-item">
     <Link
      className ="nav-link" 
       style={isActive(history, "/seller")} 
       to= "/seller"
       >
       Seller
       </Link>
 </li>


</ul>
     <ul className="navbar-nav ml-auto">
 
          <li className = "nav-item">
              <Link
               className ="nav-link"  
               style={isActive(history, "/")}  
               to="/"
               >
               Home
               </Link>
          </li>
          <li className = "nav-item">
              <Link
               className ="nav-link" 
                style={isActive(history, "/signin")} 
                to= "/signin"
                >
                Signin
                </Link>
          </li>
          <li className = "nav-item">
              <Link
               className ="nav-link" 
               style={isActive(history, "/signup") }
                to="/signup"
                >
                Signup
                </Link>
          </li>

         </ul>
         </div>
     </nav>
     </div>
);

export default withRouter(Menu);

