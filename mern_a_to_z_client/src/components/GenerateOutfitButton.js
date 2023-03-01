import Button from '@mui/material/Button';
import { useState } from 'react';
import bottomData from './bottomData';
import topData from './topData';

export default function GenerateOutfitButton() {
    const [toggle, setToggle] = useState(false);
	return (
        !toggle? 
			<Button
				variant='outlined'
				style={{ backgroundColor: 'white' }}
                title='Generate Outfit'
                onClick={() => setToggle(true)}
            >Generate Outfit</Button>
            :
            <div>{topData.map((tile, index) => (
                index % 3 == 0?
                <div>
                  <div key={tile.img}> 
                    <img src={tile.img} alt={tile.title} />            
                  </div>
                  <div key={bottomData[index].img}> 
                    <img src={bottomData[index].img} alt={bottomData[index].title} />            
                  </div>
                </div>
                :
                <br/>
              ))
            }</div>

	);
}