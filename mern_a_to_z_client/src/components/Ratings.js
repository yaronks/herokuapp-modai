import React, {Component} from 'react';
//import EmptyStar from './assets/empty-star.svg';
//import FilledStar from './assets/filled-star.svg';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import GradeIcon from '@mui/icons-material/Grade';
//import './styles.css';

export default class Stars extends Component {
    constructor(props) {
        super(props);
        this.state = {currRating : 0}
        this.onHover = this.onHover.bind(this)
        this.onClick = this.onClick.bind(this) 
      }
     onHover(e) {
      if (e.target.className === 'star') {
       this.setRating(e.target.dataset.value)
      }
     }
     onClick(e) {
      if (e.target.dataset.value === this.state.currRating){
       this.setRating(e.target.dataset.value - 1)
      }
     }
     setRating(value) {
       this.setState({currRating : value})
     }
     render(){
       return(
       [...Array(this.props.starCount).keys()].map((index) => {
       return (
        <img 
        onMouseOver={this.onHover}
        onClick={this.onClick}
        data-value={index + 1}
        className="star"   
        src={index + 1 <= this.state.currRating ? 
            GradeIcon : GradeOutlinedIcon}
        alt={index + 1 <= this.state.currRating ? 
            "filled star" : "empty star"} />)
        })
       )
      }
}

/*const RatingSystem = (props) =>  {
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
export default function App() {
    return (
      <div className="App">
        <RatingSystem starCount={5} />
      </div>
    )
};
*/