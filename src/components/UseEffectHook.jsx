import React, { useEffect, useState } from 'react';

function UseEffectHook() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const updateWindowWidth = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', updateWindowWidth);
		console.log('effect');
		return () => {
			console.log('cleanup');
			window.removeEventListener('resize', updateWindowWidth);
		};
	}, []);
	return (
		<>
			<h1 className='text-center text-2xl text-red-400 mb-5'>
				useEffect Hook with Counter
			</h1>
			<h3>{windowWidth}</h3>
		</>
	);
}

export default UseEffectHook;
