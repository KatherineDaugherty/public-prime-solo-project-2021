import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
// import FunFile from '../FunFile/FunFile.js';

//MUI  -- not used 
// import HomeIcon from '@mui/icons-material/Home';



function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      {/* <Link to="/home">
        <h2 className="nav-title"> back </h2>
      </Link> */}
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
          <div className="stickyNav">
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/inventory">
              Inventory
            </Link>

            <Link className="navLink" to="/form">
              Add Form
            </Link>

            <Link className="navLink" to="/figures">
              Figures
            </Link>

            <LogOutButton className="navLink" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;




