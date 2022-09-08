import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';

import { List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});
export const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (isOpen) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(isOpen);
    };
    const handleClick = () => {};
    const getMenuOptionIcon = (icon) => {
        switch (icon) {
            case 'ChevronLeftIcon':
                return <ChevronLeftIcon />;
            case 'option1':
                return <MailIcon />;
            case 'option2':
                return <MailIcon />;
            case 'option3':
                return <InboxIcon />;
            default:
                return <InboxIcon />;
        }
    };
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                        // edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">Some nice text</Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <SwipeableDrawer
                classes={{
                    // root: classes.drawerRoot,
                    paper: classes.drawerPaper,
                }}
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <List>
                    {['option1', 'option2', 'option3'].map((alternativ) => (
                        <ListItem button key={alternativ} onClick={handleClick}>
                            <ListItemIcon>{getMenuOptionIcon(alternativ)}</ListItemIcon>
                            <ListItemText primary={alternativ} />
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
        </div>
    );
};
