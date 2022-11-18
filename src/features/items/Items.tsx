import { useAppSelector } from '../../app/hooks'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { CardInterface, selectedItems } from './itemsSlice';
import { Catagory } from './Category';
import { Cart } from '../cart/Cart'

const gather = async (id: string) => await fetch(`https://api.magicthegathering.io/v1/cards/${id}`, { method: 'GET' });


export const Items = () => {
  const items = useAppSelector(selectedItems)

  return (
    <>
      <header className="App-header">
        <h2>{items.length} items</h2>
      </header>
      <Catagory />
      <Cart />
      <div className="cardList">
        {items.map((item, idx) => {
          //https://api.magicthegathering.io/v1/cards:id
          //const response: any = gather(item.identifiers.multiverseId);
          //console.log(item.identifiers.multiverseId);
          //item.image_url = response.card.imageUrl;
          //item.image_url = ``
          return (
          <Item key={idx} item={item} />
          );
        }
        )}
      </div>
    </>
  )
}

export const Item = ({ item }: { item: CardInterface }) => {
  return (
    <Card sx={{ width: 350 }}>
      <CardMedia component='img' height='140' image={`https://source.unsplash.com/random?${item.name}`} alt={item.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{item.name}</Typography>
        <Typography variant="body2" color="text.secondary">Mana cost: {item.manaValue}</Typography>
        <Typography variant="body2" color="text.secondary">{item.text}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">+ Add to cart</Button>
      </CardActions>
    </Card>
  )
}