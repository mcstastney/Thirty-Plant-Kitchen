import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


// Define your custom styles as JavaScript objects
const styles = {
  card: {
    Height: 1200,
    maxWidth: 500,
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
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}