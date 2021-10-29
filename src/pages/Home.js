import { Typography, Container, Grid } from "@mui/material";
import React from "react";
import { useStyles } from "../Styles";

import BlogCard from "../components/Card";

const Home = () => {
    const classes = useStyles();
    return (
        <Container sx={{mt: "2rem", mb: "2rem"}}>
            <Container maxWidth='sm'>
                <Typography variant="h2" component='h1' align='center'>Welcome in the </Typography>
                <Typography className={classes.logo} variant="h2" component="h1" align="center">Ordinary Blog</Typography>
                <Typography variant="subtitle1" component="p" align="center" mt={"2rem"} mb={"2rem"}>
                    Ce blog est fictif. Il est un terrain d'expérimentation dans le développement web pour sa créatrice. Il a un back-end sous express, une basse de données MongoDb et un front-end construit avec MUI sous React.js.
                </Typography>
            </Container>
            <Grid container spacing={2} direction='row' wrap='wrap'>
                <Grid  item xs={4}>
                    <BlogCard />
                </Grid>
                <Grid item xs={4}>
                    <BlogCard />
                </Grid>
                <Grid item xs={4}>
                    <BlogCard />
                </Grid>
                <Grid item xs={4}>
                    <BlogCard />
                </Grid>
                <Grid item xs={4}>
                    <BlogCard />
                </Grid>
                <Grid item xs={4}>
                    <BlogCard />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;