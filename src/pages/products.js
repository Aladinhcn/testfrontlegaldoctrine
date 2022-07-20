import React from "react";
import { Helmet } from "react-helmet";
import { Box, Container, Grid} from "@material-ui/core";

const ProductList = () => {
  return (
    <>
      <Helmet>
        <title>Products | Legal Doctrine test</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <Box
            sx={{
              pt: 3,
            }}
          >
            <Grid container spacing={3}></Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ProductList;
