import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Header from './Header';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

// idhar se google keep jese banyenge

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        // isko band isliye kiya kyoki apn ko open mei drwawer ki width nhi chaiye thi 
        // width: `calc(100% - ${drawerWidth}px)`,  
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function SideNav({ tab, view, modeValue, filt }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const icons = [
        <LightbulbOutlinedIcon />,
        <NotificationsNoneOutlinedIcon />,
        <LabelOutlinedIcon />,
        <ArchiveOutlinedIcon />,
        <DeleteOutlineOutlinedIcon />
    ];

    const link = [
        '/dashboard',
        '/dashboard#reminder',
        '/dashboard#editlables',
        '/dashboard#archive',
        '/dashboard#trash',

    ]
    const tabs = [1, 2, 3, 4, 5];

    const handleChange = (value) => {
        tab(value)
    }

    // for the gird view and list view 
    const handleView = (value) => {
        view(value);
    }
    const handleMode = (value) => {
        modeValue(value);
    }

    const fit = (value) => {
        filt(value)
    }

    return (
        <Box sx={{ display: 'flex' }} style={{ backgroundColor: "#202124" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} style={{ backgroundColor: "#202124" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        // ek hi function mei on and off kar diya
                        onClick={() => {
                            !open ?
                                handleDrawerOpen() :
                                handleDrawerClose()
                        }}

                        // edge="start"
                        sx={{
                            // marginRight: 5,
                            //     ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" >
                        <Header handleView={handleView} handleMode={handleMode} fit={fit} />
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open} >
                <DrawerHeader style={{ backgroundColor: "#202124" }}>

                </DrawerHeader>


                <List style={{ backgroundColor: "#202124", height: "100%" }} >
                    {['Notes', 'Reminder', 'Edit Labels', 'Archive', 'Trash'].map((text, index) => (
                        <Link to={link[index]} onClick={() => handleChange(tabs[index])}>
                            <ListItem key={text} disablePadding sx={{ display: 'block' }} style={{ backgroundColor: "#202124", color: "white", marginLeft: "10px" }} >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                        style={{ color: "white" }}
                                    >

                                        {icons[index]}
                                    </ListItemIcon>

                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}

                </List>


            </Drawer>


        </Box>
    );
}
