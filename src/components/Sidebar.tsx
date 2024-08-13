import '../styles/Sidebar.css';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';



const Sidebar: React.FC = ()=> {
  return (
    <div className="sidebar">
      <ul>
        <li className="active">
          <LightbulbOutlinedIcon/>
          <span className='sidebar-name'>
          Notes
          </span>
        </li>
        <li>
        <NotificationsNoneOutlinedIcon/>
        <span className='sidebar-name'>Reminders</span>
          
        </li>
        <li>
        <EditOutlinedIcon/>
        <span className='sidebar-name'>labels</span>
       
        </li>
        <li>
        <ArchiveOutlinedIcon/>
        <span className='sidebar-name'>Archive</span>
          
        </li>
        <li>
        <DeleteOutlineOutlinedIcon />    
        <span className='sidebar-name'>Trash</span>
             
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
