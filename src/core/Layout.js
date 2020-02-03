import React from 'react';
import Menu from './Menu';
import './Layout.css';

const Layout = ({title="Title", description="Description", className, children }) => (
    
    <div>
          <Menu />
          <div className ="jumbotron">
            
              <p className="lead">{description}</p>
          </div>
          <div className ={className}>{children}</div> 

       <div className="row">
            
          <footer className="col-12 p-5 m-2 border-top offset-3">
    <div class="row">
      <div className="col-md-5">
       
        <small className="d-block mb-3 text-muted">&copy; 2017-2019 &nbsp; Company</small>
      </div>
    
    
      <div class="col-md-5">
        
        <ul class="list-unstyled text-small form-inline p-4 m-3">
     
          <li className="textcol"><a className="text-muted mr-3 text-white" href="#">Privacy</a></li>
          <li  className="textcol"><a className="text-muted ml-3 mr-3 text-white" href="#">Terms</a></li>
          <li  className="textcol"><a className="text-muted mr-3 text-white" href="#">Contact</a></li>
          <li  className="textcol"><a className="text-muted ml-3 text-white" href="#">Buyers</a></li>
        </ul>
      </div>
    </div>
  </footer>


             
          </div>
    </div>

);


export default Layout;
