import { useAppSelector } from '../../app/hooks'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { CardInterface, selectedItems } from './itemsSlice';
import { Catagory } from './Category';
export const Items = () => {
  const items = useAppSelector(selectedItems)
  return (
    <>
      <h2>{items.length} items</h2>
      <>
      <Catagory/>
        {items.map((item, idx) => (
          <Item key={idx} item={item}/>
        ))}
      </>
    </>
  )
}

export const Item = ({ item }: { item: CardInterface }) => {
  return (
    <Card sx={{width: 350}}>
      <CardMedia component='img' height='140' image={item.image_url} alt={item.name}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{item.name}</Typography>
        <Typography variant="body2" color="text.secondary">Mana cost: {item.manaValue}</Typography>
        <Typography variant="body2" color="text.secondary">{item.text}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  )
}