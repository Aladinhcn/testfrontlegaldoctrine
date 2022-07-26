import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { formatCurrency } from "../../utils/utils";
import CartContext from "../../context/cart/CartContext";

export const Total = () => {
  const { discountBread, discountMilk, total } = useContext(CartContext);
  let discount = 0;
  let finalTotal = 0;
  if (discountBread && discountMilk) {
    discount = discountBread + discountMilk;
    finalTotal = discount + Number(total);
  }
  if (discountMilk && !discountBread) {
    discount = discountMilk;
    finalTotal = discount + Number(total);
  }
  if (discountBread && !discountMilk) {
    discount = discountBread;
    finalTotal = discount + Number(total);
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      margin="5px"
      width="100%"
    >
      <Typography marginRight="10px" align="right" variant="body1">
        Subtotal
      </Typography>
      <Typography
        marginRight="10px"
        align="right"
        color="textPrimary"
        variant="body1"
      >
        <strong>{formatCurrency(total)}</strong>
      </Typography>
      <Typography marginRight="10px" align="right" variant="body1">
        Discount
      </Typography>
      <Typography
        marginRight="10px"
        align="right"
        color="textPrimary"
        variant="body1"
      >
        <strong>{formatCurrency(discount ? discount : 0)}</strong>
      </Typography>
      <Typography marginRight="10px" align="right" variant="body1">
        Total
      </Typography>
      <Typography
        marginRight="10px"
        align="right"
        color="textPrimary"
        variant="body1"
      >
        <strong>{formatCurrency(finalTotal)}</strong>
      </Typography>
    </Box>
  );
};
