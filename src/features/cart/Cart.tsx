import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import React from 'react';
import { useAppSelector } from '../../app/hooks'
import { getCart } from './cartSlice';

export const Cart = () => {
  const cart = useAppSelector(getCart);

  const [state, setState] = React.useState({
    open: false,
  })
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setState({ open: open })
  }
  const populateCart = () => {
    if (cart.length === 0) {
      return (<ListItem key={1}><ListItemText primary={'Your cart is empty!'} /></ListItem>)
    } else {
      return cart.map((item, idx) => {
        return (
          <>
            <ListItem key={idx}>
              <ListItemButton>
                <ListItemText primary={`${item}`} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        )
      })
    }
  }
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {populateCart()}
      </List>
    </Box>
  );
  return (
    <div>
      <Button onClick={toggleDrawer(true)}>View Cart{`(${cart.length})`}</Button>
      <Drawer anchor='right' open={state.open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  )
}