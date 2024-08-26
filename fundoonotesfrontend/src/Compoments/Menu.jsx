import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVertOutlined';
import { useParams } from 'react-router-dom';
import { trashNote } from '../Services/NoteService';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const { id } = useParams();

    const delte = async () => {
        if (id) {
            console.log(id)
            try {
                const res = await trashNote(id);
                console.log("trashed the note", res);
                handleClose();
                // return res;
            } catch (error) {
                console.log("Falied to Trash the NOTE ", id)
            }
        } else {
            console.error('No id found in params');
        }
    }


    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreVertIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}

            >
                <MenuItem onClick={delte}>Delete Note</MenuItem>
                <MenuItem onClick={handleClose}>Add Label</MenuItem>
                <MenuItem onClick={handleClose}>Add Drawing</MenuItem>
            </Menu>
        </div>
    );
}