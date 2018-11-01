import React from 'react';

const Rank = ({name, entries}) => {
	return (
		<div className='white f3'>
			{`Welcome ${name}, picture uploaded:`}
      <div className='white f1 '>
        {entries}
      </div>
		</div>
	);
}

export default Rank;