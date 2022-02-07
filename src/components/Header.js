import { Box, Button, Grid, Typography } from '@material-ui/core/';
import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Header = () => {
    return (
            <Grid container direction="row" justify="space-between" alignItems="start"  >
                <Box container justify="flex-around" marginTop="8px" container border="2px" borderColor="success.light">
                    <Box fontDecoration="underline" bgcolor="success.light" padding="8px" borderRadius="8px" marginTop="8px">
                        <Typography variant='h3' component='h1' underline="always" overline>
                            Dio Shopping
                        </Typography>
                    </Box>
                    <Link to="/">
                        <Button color="primary">Home</Button>
                    </Link>
                    <Link to="/contato">
                        <Button color="primary">Contato</Button>
                    </Link>
                </Box>
                <Box >
                    <Cart />
                    <Link to="/signin">
                        <Button variant="outlined" color="primary" padding="8px">Sign In</Button>
                    </Link>
                    <Link to="/signup">
                        <Button variant="outlined" color="primary" padding="8px">Sign Up</Button>
                    </Link>
                </Box>
            </Grid>

    )
}

export default Header;
