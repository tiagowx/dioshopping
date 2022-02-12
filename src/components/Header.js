import {
    AppBar,
    Avatar,
    Box,
    Button,
    Breadcrumbs,
    ClickAwayListener,
    Grid,
    Grow,
    IconButton,
    MenuList,
    MenuItem,
    Paper,
    Popper,
    Toolbar,
    Typography
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Cart from './Cart';


const Header = (user?) => {

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);


    //
    const setUser = (user) => {
        if (!user) {
            return (
                <Box padding="8px">
                    <Cart />
                    <RouterLink to="/signin">
                        <Button variant="outlined" color="primary">Sign In</Button>
                    </RouterLink>
                    <RouterLink to="/signup">
                        <Button variant="outlined" color="primary">Sign Up</Button>
                    </RouterLink>
                </Box>
            )
        }

        return (
            <Box ml="8px">
                <Avatar >
                    <Button
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        
                    >                        T
                    </Button>
                </Avatar>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={handleClose}>Perfil Público</MenuItem>
                                        <MenuItem onClick={handleClose}>Minha Conta</MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>

            </Box>
        )
    }
    return (
        <Grid container direction="row" alignItems="start" justifyContent='between' >
            <Box bgcolor="success.light" color="primary.main" border={3} padding="8px" borderRadius="8px" mt="8px" >
                <Typography variant='h3' component='h1'>
                    Dio Shopping
                </Typography>
            </Box>
            <Box flexGrow={1} ml="16px" mt="12px">
                <AppBar position="static" color="inherit">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon  color="primary"/>
                        </IconButton>
                        <Box flexGrow={1}>
                            <Breadcrumbs variant='a' component='a'>
                                <RouterLink to="/">
                                    <Button textDeecoration="text-decoration: underline" variant="outlined" color="inherit">Home</Button>
                                </RouterLink>
                                <RouterLink to="/contato">
                                    <Button variant="outlined" color="inherit">Contato</Button>
                                </RouterLink>
                            </Breadcrumbs>
                        </Box>
                        <Cart />
                        {setUser(user)}
                    </Toolbar>
                </AppBar>

            </Box>
        </Grid>

    )
}

export default Header;
