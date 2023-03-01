import Button from '@mui/material/Button';
import { useState } from 'react';
import bottomData from './bottomData';
import topData from './topData';
const maxOutfitsNumber = 6
export default function GenerateOutfitButton() {
	const [count, setCount] = useState(-1);
	return (
		<div>
			<Button
				variant='outlined'
				style={{ backgroundColor: 'white' }}
				title='Generate Outfit'
				onClick={() => setCount((count+1)%maxOutfitsNumber)}
			>
				Generate Outfit
			</Button>
			{(count == -1) ? <br/>:
			<div>
				{<div>
							<div key={topData[count].img}>
								<img src={topData[count].img} alt={topData[count].title} />
							</div>
							<div key={bottomData[count].img}>
								<img
									src={bottomData[count].img}
									alt={bottomData[count].title}
								/>
							</div>
						</div>}
			</div>}
		</div>
	);
}
