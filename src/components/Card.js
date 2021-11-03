import React from 'react';
import { Card, CardActions, CardContent,CardMedia, Button, Typography } from '@mui/material';

const BlogCard = ({article}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={article.imageUrl}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="secondary.contrast">
                {article.title}
                </Typography>
                <Typography variant="body2" color="primary.light">
                {article.text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="secondary">Learn More</Button>
            </CardActions>
        </Card>
    );
};
export default BlogCard;