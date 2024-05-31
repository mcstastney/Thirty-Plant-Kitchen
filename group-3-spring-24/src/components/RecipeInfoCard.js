import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// custom styles as js objects
const styles = {
  card: {
    maxWidth: 600,
    height: 750,
    margin: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '15px',
  },
  media: {
    height: 500,
    borderRadius: '15px 15px 0 0',
  },
  content: {
    textAlign: 'center',
    padding: '2rem',
    alignItems: 'center'
  },
};


// define card function, use props to make reusuable
export default function RecipeInfoCard({image, alt, title, text}) {
  return (
    <Card sx={styles.card}>
      <CardMedia
        sx={styles.media}
        image={image}
        title={alt}
      />
      <CardContent sx={styles.content}>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant='subtitle1' color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}