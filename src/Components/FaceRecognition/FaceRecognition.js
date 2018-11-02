import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box, predictionTrigger}) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img className='fl' id='inputImage' src={imageUrl} alt='' width='500px' height='auto'/>
				<div className='bounding-box' onClick={predictionTrigger} style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
			</div>
		</div>
	);
}

export default FaceRecognition;