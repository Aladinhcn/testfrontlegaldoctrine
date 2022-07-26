import React, { useContext } from "react";
import { CartItems } from "./cartItems";
import CartContext from "../../context/cart/CartContext";
import {Box, Typography } from "@mui/material";
import { Total } from "./total";

export const Cart = ({ ...rest }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "500px",
        alignContent: "center",
        alignItems: "center"
      }}
      {...rest}
    >
      {/* If cart is empty, display message, and if not, display each cart
            Item in cart: {cartItems.length} */}
      {cartItems.length === 0 ? (
        <Typography variant="h6" align="center" margin="20px">
          Cart is empty
        </Typography>
      ) : (
        <React.Fragment>
          {cartItems.map((product) => (
            <CartItems key={product.id} product={product} />
          ))}
            <Total />
        </React.Fragment>
      )}
    </Box>
  );
};
