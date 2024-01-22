'use client'
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import { Divider } from '@mui/material';

const options = [
  "Ativar",
  "Inativar"
]

interface LongMenuProps {
  onUpdateStatus: (newStatus: string) => void;
}

const ITEM_HEIGHT = 48;

export default function LongMenu({ onUpdateStatus }: LongMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStatusClick = (option: string) => {
    onUpdateStatus(option);
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <p className='py-[14px] px-[16px] text-gray-900'>Mudar status</p>

        <Divider />

        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleStatusClick(option)}>
            <span className={
              `justify-center flex gap-4  
              ${option === 'Ativar' ?
                'text-green-700' :
                'text-red-600'
              }`}
            >
              {option === 'Ativar' ?
                <CheckCircleOutlineIcon /> :
                <NotInterestedIcon />
              }
              <span>{option}</span>
            </span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}