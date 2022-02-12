import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Paper, Box, Grid, Typography, List, makeStyles } from '@material-ui/core/';
import Item from '../components/Item';
import Card from '../components/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '5px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
}));



const HomePage = () => {
  const products = useSelector(state => state.products)
  const classes = useStyles();
  const [filters, setFilters] = useState([])


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


  function handlerFilter(filterId) {
    let list = [];
    if (!filters.includes(filterId)) {
      list = [...filters];
      list.push(filterId);
    } else {
      list = filters.filter((value) => value != filterId);
    }
    setFilters(list)
  }

  //change
  useEffect(() => {
    
    console.log(filters)
  })

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item md={3}>
        <Paper className={classes.paper}>
          <Box bgcolor="info.main" color="secondary" borderRadius={8} padding="8px">
            <Typography variant='h5'>
              Categorias
            </Typography>
          </Box>
          <List>
            {category.map(
              category => {
                return (
                  <Item
                    key={category.id}
                    name={category.name}
                    details={count[category.name]}
                    typeShirtId={category.id}
                    onClick={() => handlerFilter(category.id)}
                    checked={filters.includes(category.id)}
                  />
                )
              }
            )}
          </List>
        </Paper>

      </Grid>
      <Grid container xs={9} spacing={3} >
        {products.filter(filtered => filters.includes(filtered.id_categorys) || filters.length === 0).map(item => {

          return (
            <Card
              key={item.id_product}
              product={item}
            >
              {item.name_product}
            </Card>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default HomePage;
