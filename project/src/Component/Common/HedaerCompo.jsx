// import React, { useState } from 'react';
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBBtn,
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
//   MDBDropdownItem,
//   MDBCollapse,
// } from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';
// // import Logo from './logo1.png';

// export default function App() {
//   const [openBasic, setOpenBasic] = useState(false);
//   const StyledObject = {width:"80px"}
//   const menuData = { "/": "Home", "/about": "About us", "/contact": "Contact us", "/login": "Login" , "/api": "Access API" }
//   let MenuRes = Object.entries(menuData).map(([key, value], i) => {
//     // let MenuRes = Object.entries(menuData).map((key, value) => { 
//     // console.log("key : ", key, "value : ", value, i);
//     return <MDBNavbarItem key={i}>
//       <Link className='nav-link' to={key}>{value}</Link>
//       {/* <MDBNavbarLink active aria-current='page' href='#'>
//       Home
//     </MDBNavbarLink> */}
//     </MDBNavbarItem>
//   }
//   )
//   return (
//     <MDBNavbar expand='lg' light bgColor='light'>
//       <MDBContainer fluid>
//         <MDBNavbarBrand href='#'>
//         Amit Patel
//           {/* <img src="%PUBLIC_URL%/logo.png" alt="" /> */}
//         </MDBNavbarBrand>

//         <MDBNavbarToggler
//           aria-controls='navbarSupportedContent'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setOpenBasic(!openBasic)}
//         >
//           <MDBIcon icon='bars' fas />
//         </MDBNavbarToggler>

//         <MDBCollapse navbar open={openBasic}>
//           <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
           
           
//           {MenuRes}
//             {/* <MDBNavbarItem>
//               <Link className='nav-link' to="/">Home</Link>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <Link className='nav-link' to="/about">About</Link>              
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <Link className='nav-link' to="/contact">Contact</Link>              
//             </MDBNavbarItem> */}
//             <MDBNavbarItem>
//               <MDBDropdown>
//                 <MDBDropdownToggle tag='a' className='nav-link' role='button'>
//                   Dropdown
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu>
//                   <MDBDropdownItem link>Action</MDBDropdownItem>
//                   <MDBDropdownItem link>Another action</MDBDropdownItem>
//                   <MDBDropdownItem link>Something else here</MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavbarItem>

//           </MDBNavbarNav>

//           <form className='d-flex input-group w-auto'>
//             <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
//             <MDBBtn color='primary'>Search</MDBBtn>
//           </form>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }

import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
// import Logo from './logo1.png';

export default function App() {
  const [openBasic, setOpenBasic] = useState(false);
  const StyledObject = {width:"80px"}
  const [cookies, setCookie] = useCookies(['name']);
  // setCookie('loggedin', "active");
  console.log("cookies data in header",cookies.loggedin);

  const menuData = { "/": "Home", "/about": "About us", "/contact": "Contact us","/api": "Access API" }
  let MenuRes = Object.entries(menuData).map(([key, value], i) => {
    // let MenuRes = Object.entries(menuData).map((key, value) => { 
    // console.log("key : ", key, "value : ", value, i);
    return <MDBNavbarItem key={i}>
      <Link className='nav-link' to={key}>{value}</Link>
      {/* <MDBNavbarLink active aria-current='page' href='#'>
      Home
    </MDBNavbarLink> */}
    </MDBNavbarItem>
  }
  )
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          Nav
          {/* <img src="%PUBLIC_URL%/logo.png" alt="" /> */}
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
           
           
          {MenuRes}
          {(cookies.loggedin == 1)? <MDBNavbarItem>
              <Link className='nav-link' to="/logout">Logout</Link>
            </MDBNavbarItem>:<MDBNavbarItem>
              <Link className='nav-link' to="/login">Login</Link>
            </MDBNavbarItem> }
            {/* <MDBNavbarItem>
              <Link className='nav-link' to="/">Home</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to="/about">About</Link>              
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to="/contact">Contact</Link>              
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}