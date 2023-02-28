import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import tileData from './tileData';
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
      <h1 className='subheading-left-text'> Casual Wear </h1>
      <GridList className={classes.gridList} cols={4}>
        {tileData.map((tile) => (
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
      
      <h1 className='subheading-left-text'> Office Wear </h1>
      <GridList className={classes.gridList} cols={4}>
        {tileData.map((tile) => (
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



/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 800,
      height: 1000,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));
  
  export default function TitlebarGridList() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <GridList cellHeight={300}  spacing={20} className={classes.gridList}>
          <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
            <ListSubheader component="div"></ListSubheader>
          </GridListTile>
          {tileData.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} />
              <GridListTileBar
                //title={tile.title}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                    <FavoriteIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
  */