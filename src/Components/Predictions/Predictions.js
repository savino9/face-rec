import React from 'react';
import './Predictions.css';

const Predictions = ({pred,isPredTriggered}) => {
	return (		
		<div className='relative'>
			<main className="pa2 w-100 center">
				<article className="br3 ba shadow-5 b--white o-90 bg-white w-80  w-100-l mw7 purple">
		      <div className='purple f3 db w-100'>
		        <h4>Age:</h4>
		        <p>{pred.age}</p>
					</div>		        
					{
						pred.gender.map((val,i) => {
							return (
								<div className='purple f3 db w-100' key={i}>
									<h4>{val.name}:</h4>
									<p>{val.value}</p>
								</div>
							)
						})
	      	}
	      	{
						pred.multicultural_appearance.map((val,i) => {
							return (
								<div className='purple f3 db w-100' key={i}>
									<h4>{val.name}:</h4>
									<p>{val.value}</p>
								</div>
							)
						})
	      	}
				</article>
			</main>
		</div>
	);
}

export default Predictions;