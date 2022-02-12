import React from 'react';
import { Badge, Checkbox, Icon, ListItem, ListItemText } from '@material-ui/core/';

const Item = ({ name, details, typeShirtId, checked, onClick }) => {

    const setColor = (id) => {
        switch (id) {
            case 1: return "#43862C"; break;
            case 2: return "#004058"; break;
            case 3: return "#F5E43A"; break;
            case 4: return "#dbdadf"; break;
            case 5: return "#5185b7"; break;
        }
    }

    return (
        <ListItem key={typeShirtId} dense button onClick={onClick}>
            <Checkbox
                edge="start"
                checked={checked}
                tabIndex={typeShirtId}
                inputProps={{ 'aria-labelledby': typeShirtId }}
            />
            <ListItemText primary={name} />
            <Badge color="secondary" badgeContent={details}>
                <Icon className="fa fa-tshirt" style={{ color: setColor(typeShirtId) }} />
            </Badge>
        </ListItem>
    )
}

export default Item;
