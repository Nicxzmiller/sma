import React, { useContext } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as Sentry from '@sentry/react';

import './navbar.scss';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="Navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span>GamaSocial</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <AccountCircleIcon />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Sentry.withProfiler(Navbar, { name: 'App' });
