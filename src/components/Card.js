import React from 'react';
import { Card, CardActions, CardContent,CardMedia, Button, Typography } from '@mui/material';

const BlogCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="https://cdn.pixabay.com/photo/2021/10/20/14/01/bull-6726185_960_720.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="secondary.contrast">
                Article 1
                </Typography>
                <Typography variant="body2" color="primary.light">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="secondary">Learn More</Button>
            </CardActions>
        </Card>
    );
};
export default BlogCard;