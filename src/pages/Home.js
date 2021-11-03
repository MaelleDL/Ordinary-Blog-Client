import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadArticles} from '../actions/ArticlesAction';

import { useStyles } from "../Styles";
import { Typography, Container, Grid, Box } from "@mui/material";

import BlogCard from "../components/Card";

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadArticles());
    }, [dispatch]);
    const articles = useSelector(state => state.articles.all);
    return (
        <Box>
            <Container className={classes.home}>
                <Container className={classes.welcome}>
                    <Typography variant="h2" component='h1' align='center'>Welcome in the </Typography>
                    <Typography className={classes.logo} variant="h2" component="h1" align="center">Ordinary Blog</Typography>
                    <Typography variant="subtitle1" component="p" align="center" mt={"2rem"} mb={"2rem"}>
                        Ce blog est fictif. Il est un terrain d'expérimentation pour sa créatrice. Il a un back-end sous express, une basse de données MongoDb et un front-end construit avec MUI sous React.js.
                    </Typography>
                </Container>
            </Container>
            <Grid container spacing={2} direction='row' wrap='wrap'>
                {articles.map(article => (
                    <Grid item xs={4} key={article._id}>
                        <BlogCard article={article}  />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Home;