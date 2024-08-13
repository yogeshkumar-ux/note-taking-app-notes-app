import React from 'react';
import '../styles/Taskbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ListIcon from '@mui/icons-material/List';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';

const Taskbar: React.FC = () => {
    return (
        <div className="taskbar">
            <div className="left-section">
                <button className="menu-button">&#9776;</button>
                <span className="app-name">Noted</span>
            </div>
            <div className="center-section">
               
            </div>
            <div className="right-section">
                <div className="group-right">
                <button className="icon-button"><RefreshIcon/></button>
                <button className="icon-button"><ListIcon/></button>
                <button className="icon-button"><SettingsOutlinedIcon/></button>
                </div>
                <button className="icon-button"><AppsIcon/></button>
                <AccountCircleIcon   style={{ color: "#a89e32",fontSize: 40 }} />
            </div>
        </div>
    );
};

export default Taskbar;
