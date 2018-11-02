import React from 'react';

const Rank = ({name, entries}) => {
	return (
		<main className="pa4">
			<article className="br3 ba shadow-5 b--white o-90 bg-white w-80  w-100-l mw7 center purple">
				<div className='purple f3'>
					{`Welcome ${name}, picture uploaded:`}
		      <div className='purple f1 '>
		        {entries}
		      </div>
				</div>
			</article>
		</main>
	);
}

export default Rank;