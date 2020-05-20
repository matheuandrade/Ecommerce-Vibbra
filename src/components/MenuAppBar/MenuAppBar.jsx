import React, { useState } from 'react';
import { 
    AppBar, 
    CssBaseline, 
    Toolbar, 
    IconButton,
    Typography,
    MenuItem,
    Menu,
    Drawer,
    List,
    Divider,
    Container,
    Grid,
    Paper, 
    Box
    } from '@material-ui/core';    
import AccountCircle from '@material-ui/icons/AccountCircle'; 
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './Styles';

import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CreateIcon from '@material-ui/icons/Create';
import HomeIcon from '@material-ui/icons/Home';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

import Deal from '../../pages/Deal/Deal';
import Invite from '../../pages/Invite/Invite';
import CreateDeal from '../../pages/Deal/CreateDeal/CreateDeal';
import Search from '../../pages/Deal/Search/Search';

import Copyright from '../../components/Copyright/Copyright';

const MenuAppBar = ({
    user,
    handleSignOut
}) => {  

    const [componentToRender, setComponentToRender] = useState(1);

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const openOptions = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    }; 

    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
                <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              {user.name}
            </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openOptions}
                onClose={handleClose}
                >   
                <MenuItem onClick={() => true}>Profile</MenuItem>
                <MenuItem onClick={() => handleSignOut()}>Sign Off</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={() => setComponentToRender(1)}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => setComponentToRender(2)}>
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Create Deal" />
            </ListItem>
            <ListItem button onClick={() => setComponentToRender(3)}>
              <ListItemIcon>
                <LocalOfferIcon />
              </ListItemIcon>
              <ListItemText primary="Deals" />
            </ListItem>
            <ListItem button onClick={() => setComponentToRender(4)}>
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Invites" />
            </ListItem>            
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container className={classes.container}>
            <Grid container>
              <Grid item xs={12}>
                {componentToRender === 1 &&
                  <Paper elevation={3}>
                      <Search/>               
                  </Paper>
                }                                  
                {componentToRender === 2 && 
                  <Paper className={classes.search} elevation={3}>
                    <CreateDeal/>
                  </Paper>
                }
                {componentToRender === 3 &&
                  <Paper elevation={3}>                  
                    <Deal/>
                  </Paper>
                }
                {componentToRender === 4 &&
                  <Paper elevation={3}>                  
                    <Invite/>
                  </Paper>
                }
              </Grid>
            </Grid>
            <br></br>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    );
};
  
export default MenuAppBar;
