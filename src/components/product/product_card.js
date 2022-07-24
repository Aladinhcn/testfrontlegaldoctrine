import React, { useContext } from "react";
import {
  Rating,
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button
} from "@mui/material";
import { formatCurrency } from "../../utils/utils";
import CartContext from "../../context/cart/CartContext";

export const ProductCard = ({ product, ...rest }) => {
  const { addToCart, increase, cartItems } =
    useContext(CartContext);
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      {...rest}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <CardMedia
              component="img"
              margin="5px"
              sx={{ width: "100px", height: "150px" }}
              src={product.media}
              alt="product cover"
            />
            <Box>
              <Typography
                margin="5px"
                align="left"
                sx={{ pl: 1 }}
                color="textPrimary"
                gutterBottom
                variant="h5"
              >
                {product.title}
              </Typography>
              <Typography
                margin="5px"
                align="left"
                sx={{ pl: 1 }}
                color="textPrimary"
                variant="body2"
              >
                {product.description}
              </Typography>
            </Box>
            <Box>
              <Typography
                margin="5px"
                align="left"
                color="textPrimary"
                variant="body1"
              >
                <strong>{formatCurrency(product.price)}</strong>
              </Typography>
              <Rating
                margin="5px"
                name="read-only"
                value={product.rating}
                readOnly
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
            {isInCart(product) && (
              <Button
                variant="contained"
                onClick={() => {
                  increase(product);
                }}
                className="btn"
              >
                Add More
              </Button>
            )}
            {!isInCart(product) && (
              <Button variant="contained" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
