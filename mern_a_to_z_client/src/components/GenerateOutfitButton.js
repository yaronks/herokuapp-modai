import Button from '@mui/material/Button';
import { useState } from 'react';
import bottomData from './bottomData';
import topData from './topData';

export default function GenerateOutfitButton() {
	const [count, setCount] = useState(-1);
	return (
		<div>
			<Button
				variant='outlined'
				style={{ backgroundColor: 'white' }}
				title='Generate Outfit'
				onClick={() => setCount(count+1)}
			>
				Generate Outfit
			</Button>
			{(count == -1  || count > 10) ? <br/>:
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
