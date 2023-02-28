import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import topData from './topData';
import bottomData from './bottomData';
import Stars from './Ratings';
import ButtonSet from './ButtonSet';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: theme.spacing(5),
    margin: 1,
  },
  
  gridList: {
    flexWrap: 'nowrap',
    marginBottom: 10,
  }
}));

const RatingSystem = (props) =>  {
  return (
    <div>
      <h1>5 star rating system</h1>
      <h2>Select a rating:</h2>
    <div className='rating'>
      <Stars starCount={props.starCount}/>
    </div>
    </div> 
  );
 }

export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className='subheading-left-text'> Tops </h1>
      <GridList className={classes.gridList} cols={4}>
        {topData.map((tile) => (
          <GridListTile key={tile.img}> 
            <img src={tile.img} alt={tile.title} />            
            <GridListTileBar
              title={tile.title}
              actionIcon={
                <ButtonSet> </ButtonSet>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      
      <h1 className='subheading-left-text'> Bottoms </h1>
      <GridList className={classes.gridList} cols={4}>
        {bottomData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />            
            <GridListTileBar
              title={tile.title}
              actionIcon={
                <ButtonSet> </ButtonSet>
              }
            />
            
          </GridListTile>
         
        ))}
      </GridList>

    </div>

  );
}