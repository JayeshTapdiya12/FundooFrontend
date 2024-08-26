import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import GroupAddIcon from '@mui/icons-material/GroupAddOutlined';
import LightbulbIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlined from '@mui/icons-material/ArchiveOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import '../Style/IconBar.css';
import ColorPicker from './ColorPicker';
import { useParams } from 'react-router-dom';
import { archiveNote } from '../Services/NoteService';
import BasicMenu from './Menu';

export default function IconBaar({ setIcon, tabV }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [more, setMore] = useState(false);

    const { id } = useParams();
    console.log('id in icon barr========>', id)

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const handleToggle2 = () => {
        setMore(!more);
    };

    const [icons, setIcons] = useState(setIcon);
    console.log("values of icon============>", icons, setIcon)
    console.log("values of tabs ====>", tabV)

    const archi = async () => {
        if (id) {
            console.log(id);
            try {
                const res = await archiveNote(id);
                console.log('Note archived:', res);
            } catch (error) {
                console.error('Failed to archive note:', error);
            }
        } else {
            console.error('No id found in params');
        }
    };

    const renderIcons = () => {
        switch (true) {
            case icons === 1:
                return (
                    <>
                        <Tooltip title="Notifications" arrow>
                            <IconButton>
                                <NotificationsIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Add Group" arrow>
                            <IconButton>
                                <GroupAddIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Colors" arrow>
                            <IconButton onClick={handleToggle}>
                                <ColorLensOutlinedIcon />
                                {isExpanded && (
                                    <div className="color-picker-container">
                                        <ColorPicker />
                                    </div>
                                )}
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Ideas" arrow>
                            <IconButton>
                                <LightbulbIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Archive" arrow>
                            <IconButton onClick={archi}>
                                <ArchiveOutlined />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="More Options" arrow>
                            <IconButton onClick={handleToggle2}>
                                <div className="div">
                                    <BasicMenu />
                                </div>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Undo" arrow>
                            <IconButton>
                                <ArrowBackIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Redo" arrow>
                            <IconButton>
                                <ArrowForwardIcon />
                            </IconButton>
                        </Tooltip>
                    </>
                );
            case icons === 2 && tabV === 1:
                return (
                    <>
                        <Tooltip title="Notifications" arrow>
                            <IconButton>
                                <NotificationsIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Add Group" arrow>
                            <IconButton>
                                <GroupAddIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Colors" arrow>
                            <IconButton onClick={handleToggle}>
                                <ColorLensOutlinedIcon />
                                {isExpanded && (
                                    <div className="color-picker-container">
                                        <ColorPicker />
                                    </div>
                                )}
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Ideas" arrow>
                            <IconButton>
                                <LightbulbIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Archive" arrow>
                            <IconButton onClick={archi}>
                                <ArchiveOutlined />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="More Options" arrow>
                            <IconButton onClick={handleToggle2}>
                                <div className="div">
                                    <BasicMenu />
                                </div>
                            </IconButton>
                        </Tooltip>
                    </>
                );
            // archive
            case tabV === 4:
                return (<>
                    <Tooltip title="Archive" arrow>
                        <IconButton onClick={archi}>
                            <ArchiveOutlined />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="More Options" arrow>
                        <IconButton onClick={handleToggle2}>
                            <div className="div">
                                <BasicMenu />
                            </div>
                        </IconButton>
                    </Tooltip>
                </>
                );
            // delte
            case tabV === 5:
                return (<>
                    <Tooltip title="Archive" arrow>
                        <IconButton onClick={archi}>
                            <ArchiveOutlined />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="More Options" arrow>
                        <IconButton onClick={handleToggle2}>
                            <div className="div">
                                <BasicMenu />
                            </div>
                        </IconButton>
                    </Tooltip>
                </>
                );

            default:
                return null;
        }
    };

    return (
        <div className="icon-baar">
            <div className="icon-group">
                {renderIcons()}
            </div>
        </div>
    );
}
