import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import { Box, CardMedia, Typography, IconButton, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { formatCurrency } from "../../utils/utils";

export const CartItems = ({ product }) => {
  const { increase, decrease, discountBread, discountMilk } =
    useContext(CartContext);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
        }}
        margin="5px"
      >
        <CardMedia
          component="img"
          sx={{ width: "100px", height: "100px", borderRadius: "50%" }}
          src={product.media}
          alt="product cover"
        />
        <Box>
          <Typography
            align="left"
            sx={{ pl: 1 }}
            color="textPrimary"
            gutterBottom
            variant="h6"
          >
            {product.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              verticalAlign: "baseline",
            }}
          >
            <Typography
              align="left"
              sx={{ pl: 1 }}
              color="textPrimary"
              variant="body1"
            >
              Quantity:
            </Typography>
            <Box>
              <IconButton
                onClick={() => increase(product)}
                aria-label="delete"
                size="small"
              >
                <AddIcon fontSize="small" />
              </IconButton>
              {product.quantity}
              <IconButton
                onClick={() => decrease(product)}
                aria-label="delete"
                size="small"
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box width="200px">
          <Typography align="right" color="textPrimary" variant="body1">
            <strong>{formatCurrency(product.price * product.quantity)}</strong>
          </Typography>
        </Box>
      </Box>
      <Divider width="450px" />
    </>
  );
};
