import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { CardInterface, selectedItems, imageList } from './itemsSlice';
import { Catagory } from './Category';
import { Cart } from '../cart/Cart'
import { cartSlice, getCart } from '../cart/cartSlice';
import { useAppSelector, useAppDispatch } from "../../app/hooks"




export const Items = () => {
  const items = useAppSelector(selectedItems);
  const images =  useAppSelector(imageList);
  const cart = useAppSelector(getCart);
  const columns = Math.floor(items.length / 5);

  return (
    <>
    <div className='cartCount'>Cart: {cart.length}</div>
      <header className="App-header">
        <h2>{items.length} items</h2>
      </header>
      <Catagory />
      <div className="selector"><Cart /></div>
      <div className="cardList">
        {items.map((item, idx) => {
          //https://api.magicthegathering.io/v1/cards:id
          //console.log(item.identifiers.multiverseId);
          //const response: any = gather(item.identifiers.multiverseId);
          //console.log(response)
          //console.log('image array', images)
          const obj = Object.create(item);
          obj.image_url = 'https://picsum.photos/223/310';
          //item.image_url = ``
          return (
          <Item key={idx} item={obj}/>
          );
        }
        )}
      </div>
    </>
  )
}
export const Item: any = ({ item }: { item: CardInterface }, { image }: any) => {
  const dispatch = useAppDispatch();
  return (
    <Card sx={{ height: 600, width: 223 }}>
      <CardMedia component='img' height='310' image={`https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${item.identifiers.multiverseId}&type=card`} alt={item.name} />
      <CardContent>
        <Typography gutterBottom variant="h6" className="cardTitle" component="div">{item.name}</Typography>
        <Typography variant="body2" color="text.secondary">Mana cost: {item.manaValue}</Typography>
        <Typography className="scrollable" variant="body2" color="text.secondary">{item.text}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className="bottomButton" onClick={() => {
          dispatch(cartSlice.actions.addItem({name: item.name, id: item.identifiers.multiverseId}))
        }}>+ Add to cart</Button>
      </CardActions>
    </Card>
  )
}