import React from "react";
import { Helmet } from "react-helmet";
import { Box, Typography, Grid } from "@mui/material";

import { products } from "../__mocks__/products";
import { ProductCard } from "../components/product/product_card";
import { Cart } from "../components/card/cart";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Shop | Legal Doctrine test</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          width: "100%",
          py: 3,
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            pt: 3,
            width: "45%",
            margin: "10px",
          }}
        >
          <Typography margin="20px" variant="h5">PRODUCTS</Typography>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item key={product.id} lg={12} md={12} xs={12}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            pt: 3,
            width: "35%",
            margin: "10px",
            bgcolor: "#D3D3D3",
          }}
        >
          <Typography margin="20px" variant="h5">CART <ShoppingCartOutlinedIcon /></Typography>

          <Cart />
        </Box>
      </Box>
    </>
  );
};

export default Products;
