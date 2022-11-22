import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({data}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Author : {data.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Genre : {data.genre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Edition : {data.edition}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Publisher : {data.publisher}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cost : {data.cost}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
}