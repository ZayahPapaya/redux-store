import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import React from 'react';

export const Cart = () => {

  const [state, setState] = React.useState({
    open: false,
  })
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setState({ open: open })
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem key={1} disablePadding>
          <ListItemButton>
            <ListItemText primary={'Text'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key={2} disablePadding>
          <ListItemButton>
            <ListItemText primary={'TEXT'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
      <Button onClick={toggleDrawer(true)}>View Cart</Button>
      <Drawer anchor='right' open={state.open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  )
}