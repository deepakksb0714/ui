import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import '../style.css';
import './dashboard.css'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="#"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
     
    }}
    style={{textDecoration:'none'}}
  >
    {children}
  </a>
));

const Header = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken');

        if (!token) {
          throw new Error('No token found');
        }

        const response = await fetch('http://localhost:3000/member_details', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <header style={{ paddingTop: '10px' }} className='box-shadow'>
      <div className="card-header text-center text-white" style={{ backgroundColor: 'rgb(250, 70, 22)', paddingTop: '2px' }}></div>
      <Navbar bg="white" variant="light" expand="lg">
        <div className="container-fluid">
          <Navbar.Brand href="#">
            <div className="col text-center " style={{marginLeft:"30px"}}>
              <img src="http://scalarhub.io/wp-content/uploads/2023/05/top-logo.png" width="100px" height="auto" alt="Description" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto">
              
            </Nav>
            <Nav className="ms-auto">
            <Nav.Link href="#"><b style={{ fontWeight: 700, color: '#333',marginRight:"50px"}}>Help</b></Nav.Link>
              <Dropdown style={{marginRight:"50px",marginTop:"5px"}}>
              <Dropdown.Toggle as={CustomToggle} variant="link" id="gear" style={{ fontWeight: 700, color: '#333', textDecorationLine: 'none' }}>
                  <FontAwesomeIcon icon={faCog} size='2x' color='rgb(250, 70, 22)'  />
                </Dropdown.Toggle>
                <Dropdown.Menu align="end" className="dropdown-menu-end custom-dropdown">
                  <Dropdown.Item href="#">Where you collect tax</Dropdown.Item>
                  <Dropdown.Item href="#">What you sell</Dropdown.Item>
                  <Dropdown.Item href="#">Company locations</Dropdown.Item>
                  <Dropdown.Item href="#">Marketing places</Dropdown.Item>
                  <Dropdown.Item href="#">Integrations</Dropdown.Item>
                  <Dropdown.Item href="#">Company Details</Dropdown.Item>
                  <Dropdown.Item href="#">All setting</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Applying the style and classes to the Account Dropdown */}
              <Dropdown  style={{marginTop:"3px",marginRight:"20px"}}>
              <Dropdown.Toggle as={CustomToggle} variant="link" id="account-dropdown" style={{ fontWeight: 600, textDecoration: 'none'  }}>
           {userData.first_name ? (
     <b className='account'>
      {userData.first_name.charAt(0).toUpperCase() + userData.last_name.charAt(0).toUpperCase()}
    </b>
    ) : (
      <b style={{ fontWeight: 600, color: '#333',  textDecoration: 'none'  }}>Account</b>
    )}
              </Dropdown.Toggle>
            <Dropdown.Menu align="end" className="dropdown-menu-end custom-dropdown">
            <Dropdown.Item>
      <span style={{ fontWeight: 700, color: '#333' }}>Account ID:</span>{userData.id}
    </Dropdown.Item>
    <Dropdown.Item href="#">Products and Usage</Dropdown.Item>
    <Dropdown.Item href="#">Billing</Dropdown.Item>
    <Dropdown.Item href="#">Support Cases</Dropdown.Item>
    <Dropdown.Divider  />
    <>
      <Dropdown.Item>
        <span style={{ fontWeight: 700, color: '#333' }}>Name:</span> {userData.first_name+" "+userData.last_name}
      </Dropdown.Item>
    </>
    <Dropdown.Item href="#">My Downloads</Dropdown.Item>
    <Dropdown.Item as={Link} to="/my-profile">
      <h6>My Profile</h6>
    </Dropdown.Item>
    <Dropdown.Item as={Link} to="/sign-out">
      <h6>Sign Out</h6>
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="card-header text-center text-white" style={{ backgroundColor: 'rgb(250, 70, 22)', paddingTop: '2px' }}></div>
    </header>
  );
};

export default Header;
