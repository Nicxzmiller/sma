import React from 'react';
import './leftBar.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CollectionsIcon from '@mui/icons-material/Collections';
import MessageIcon from '@mui/icons-material/Message';
import PaidIcon from '@mui/icons-material/Paid';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import TuneIcon from '@mui/icons-material/Tune';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <AccountCircleIcon sx={{ color: '#482673' }} />
            <span>Tier 2</span>
          </div>
          <div className="item">
            <Diversity3Icon sx={{ color: '#482673' }} />
            <span>Friends</span>
          </div>
          <div className="item">
            <GroupsIcon sx={{ color: '#482673' }} />
            <span>Groups</span>
          </div>
          <div className="item">
            <StorefrontIcon sx={{ color: '#482673' }} />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <OndemandVideoIcon sx={{ color: '#482673' }} />
            <span>Watch</span>
          </div>
          <div className="item">
            <BrowseGalleryIcon sx={{ color: '#482673' }} />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Shortcuts</span>

          <div className="item">
            <CalendarMonthIcon sx={{ color: '#482673' }} />
            <span>Events</span>
          </div>
          <div className="item">
            <SportsEsportsIcon sx={{ color: '#482673' }} />
            <span>Gaming</span>
          </div>
          <div className="item">
            <MessageIcon sx={{ color: '#482673' }} />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>

          <div className="item">
            <LeaderboardIcon sx={{ color: '#482673' }} />
            <span>Analytics</span>
          </div>
          <div className="item">
            <CollectionsIcon sx={{ color: '#482673' }} />
            <span>Gallery</span>
          </div>
          <div className="item">
            <TuneIcon sx={{ color: '#482673' }} />
            <span>Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
