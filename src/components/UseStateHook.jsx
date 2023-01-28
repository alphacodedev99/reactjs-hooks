import React, { useState } from 'react';

function UseStateHook() {
	// here is count definded like variable, and have secound part of setCount which is function for updateCount!
	const [count, setCount] = useState(0);

	function incrementCount() {
		// here i get previous count end changed
		setCount((prevCount) => prevCount + 1);
	}

	function decrementCount() {
		// here i get previous count end changed
		setCount((prevCount) => prevCount - 1);
	}

	return (
		<>
			<h1 className='text-center text-2xl text-red-400 mb-5'>
				useState Hook with Counter
			</h1>
			<div className='w-full flex items-center justify-center gap-2'>
				<button
					onClick={decrementCount}
					className='text-4xl bg-slate-500 text-white rounded-lg px-5 py-2'>
					-
				</button>
				<span className='text-4xl bg-red-500 text-white rounded-lg px-5 py-2'>
					{count}
				</span>
				<button
					onClick={incrementCount}
					className='text-4xl bg-slate-500 text-white rounded-lg px-5 py-2'>
					+
				</button>
			</div>
		</>
	);
}

export default UseStateHook;
