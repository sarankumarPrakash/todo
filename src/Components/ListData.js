import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import Checkbox from '@mui/material/Checkbox';

const  ListData =(props)=>{
    console.log(props)
    const {card}=props
    // const [checked, setChecked] = React.useState([1]);

    // const handleToggle = (value) => () => {
    //   const currentIndex = checked.indexOf(value);
    //   const newChecked = [...checked];
  
    //   if (currentIndex === -1) {
    //     newChecked.push(value);
    //   } else {
    //     newChecked.splice(currentIndex, 1);
    //   }
  
    //   setChecked(newChecked);
    // };
  
    const handleEdit=()=>{
        console.log("hndleEdit Clicked")
    }


    return (
      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {card.map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
         
          return (
            <ListItem
            onClick={handleEdit}
              key={value}
              
            //   secondaryAction={
            //     <Checkbox
            //       edge="end"
            //       onChange={handleToggle(value)}
            //       checked={checked.indexOf(value) !== -1}
            //       inputProps={{ 'aria-labelledby': labelId }}
            //     />
            //   }
              disablePadding
            >
              <ListItemButton>
                <ListItemText id={labelId} primary={``} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
}

export default ListData;