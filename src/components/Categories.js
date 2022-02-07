import { Box, Grid, List, makeStyles, Paper, Typography } from '@material-ui/core/';
import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
}));

function Categories() {
  const products = useSelector(state => state.products)
  const classes = useStyles();

  const categorys = products.map(
    category => {
      const container = {};
      container['id'] = category.id_categorys;
      container['name'] = category.name_categorys;
      return container;
    }
  )

  const category = categorys.map(JSON.stringify)
    .filter(function (item, index, arr) {
      return arr.indexOf(item, index + 1) === -1;
    })
    .map(JSON.parse)

  const arrayCategory = categorys.map(category => category.name)
  let count = {};

  for (let i = 0; i < arrayCategory.length; i++) {
    {
      let key = arrayCategory[i];
      count[key] = (count[key] ? count[key] + 1 : 1)
    }
  }

  return (
    <Grid item md={3}>
      <Paper className={classes.paper}>
        <Box bgcolor="info.main" borderRadius={8} padding="8px">
          <Typography variant='h5'>
            Categorias
          </Typography>
        </Box>
        <List>
          {category.map(
            category => {
              return (
                <Item key={category.id} name={category.name} details={count[category.name]} typeShirt={category.id} />
              )
            }
          )}
        </List>
      </Paper>
    </Grid>)
}

export default Categories;