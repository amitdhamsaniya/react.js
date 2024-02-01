import React from 'react';
import { Outlet} from 'react-router-dom';
import { Link } from 'react-router-dom';
const AdminTemplate = () => {

  function toggleMenu() {
    let navigation = document.querySelector('.navigation');
  let toggle = document.querySelector('.toggle');
  navigation.classList.toggle('active');
  toggle.classList.toggle('active');
}
  return (
    <>
      <div class="navigation">
        <ul>
          <li>
            <a href="#">
              {/* <Link to="/about"> */}
              <span class="icon"><i class="fa-solid fa-house"></i></span>
              <span class="title">Home</span>
              {/* </Link> */}
            </a>
          </li>
          
          <li>
            <a href="#">
              <span class="icon"><i class="fa-solid fa-user"></i></span>
              <span class="title">Profile</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fa-solid fa-message"></i></span>
              <span class="title">Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fa-solid fa-circle-info"></i></span>
              <span class="title">Help</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fa-solid fa-gear"></i></span>
              <span class="title">Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fa-solid fa-lock"></i></span>
              <span class="title">Password</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fa-solid fa-right-from-bracket"></i></span>
              <span class="title">SignOut</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="toggle" onclick="toggleMenu()">

      </div>
      <script type="text/javascript">
       
      </script>
      <div className="toggle" onClick={toggleMenu}></div>
      <Outlet></Outlet>
    </>
    
  );
  
};

export default AdminTemplate;