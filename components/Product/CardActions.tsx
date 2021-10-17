
import { Button, CardActions, IconButton } from "@material-ui/core"
import { AddShoppingCart, FavoriteBorder } from "@material-ui/icons"

const Cardactions = () => {
  return (
    <CardActions >
      <Button variant='contained' size='small' color='primary'>
        Buy Now
      </Button>
      <Button variant='outlined' size='small' color='primary'
        aria-label='add to cart' endIcon={<AddShoppingCart />}>
        Add
      </Button>
      <Button variant='outlined' size='small' color='secondary'
        aria-label='add to wishlist' endIcon={<FavoriteBorder />}>
        Wish
      </Button>
      {/* <IconButton color='primary' aria-label='add to cart'>
        <FavoriteBorder fontSize='small' />
      </IconButton> */}
    </CardActions>
  )
}

export default Cardactions
