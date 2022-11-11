import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span>GamaSocial</span>
        </Link>
        <HomeOutlinedIcon sx={{ color: '#482673' }} />
        <DarkModeOutlinedIcon sx={{ color: '#482673' }} />
        <GridViewOutlinedIcon sx={{ color: '#482673' }} />
        <div className="search">
          <SearchOutlinedIcon sx={{ color: '#482673' }} />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon sx={{ color: '#482673' }} />
        <EmailOutlinedIcon sx={{ color: '#482673' }} />
        <NotificationsNoneOutlinedIcon sx={{ color: '#482673' }} />
        <div className="user">
          <AccountCircleIcon sx={{ color: '#482673' }} />
          <span>Tier 2</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
