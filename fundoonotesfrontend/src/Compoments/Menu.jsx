import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVertOutlined';
import { useParams } from 'react-router-dom';
import { addlabel, trashNote } from '../Services/NoteService';
import TextareaAutosize from '@mui/material/TextareaAutosize';


export default function BasicMenu({ setNoteCreated }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);

    const [newlabel, setNewLabel] = React.useState('');


    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);



    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    const { id } = useParams();

    const createlabel = async (e) => {
        e.preventDefault();
        const data = { newlabel };
        const res = await addlabel(id, { label: newlabel });
        setNoteCreated(true)
        console.log(res);
    }


    const trash = async () => {
        if (id) {

            try {
                const res = await trashNote(id);

                setNoteCreated(true)

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
                <MenuItem onClick={trash}>Delete Note</MenuItem>
                <Button
                    id="add-label"
                    aria-controls={open2 ? 'add-label-pop' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open2 ? 'true' : undefined}
                    onClick={handleClick2}

                >
                    add label
                </Button>

                <MenuItem onClick={handleClose}>Add Drawing</MenuItem>
            </Menu>

            <Menu
                id="add-label-pop"
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose2}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Empty"
                    type='text'
                    label="First Name"
                    variant="standard"
                    margin="normal"
                    required
                    value={newlabel}
                    onChange={(e) => setNewLabel(e.target.value)}
                    style={{ width: 200 }}
                />
                <span className="close-btn" style={{ color: "black" }} onClick={createlabel}>Done</span>


            </Menu>
        </div>
    );
}