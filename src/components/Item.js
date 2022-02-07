import React from 'react';
import { Badge, Icon, ListItem, ListItemText } from '@material-ui/core/';
import { scryRenderedComponentsWithType } from 'react-dom/cjs/react-dom-test-utils.development';

const Item = ({ name, details, typeShirt }) => {

    const setColor = (id) =>{
        switch (id) {
            case 1 : return "#43862C"; break;
            case 2 : return "#004058"; break;
            case 3 : return "#F5E43A"; break;
            case 4 : return "#dbdadf"; break;
            case 5 : return "#5185b7"; break;
        }
    }

    return (
        <ListItem>
            <ListItemText primary={name} />
            <Badge color="secondary" badgeContent={details}>
                <Icon className="fa fa-tshirt" style={{ color:setColor(typeShirt) }}/>
            </Badge>
        </ListItem>
    )
}

export default Item;
