import React, { useState } from 'react';

function UseStateHook() {
	// here is count definded like variable, and have secound part of setCount which is function for updateCount!
	const [count, setCount] = useState(0);

	const [person, setPerson] = useState({ name: 'Alpha', age: 23 });

	function incrementCount() {
		// here i get previous count end changed
		setCount((prevCount) => prevCount + 1);
	}

	function decrementCount() {
		// here i get previous count end changed
		setCount((prevCount) => prevCount - 1);
	}

	// for second state change just name
	function changeName() {
		setPerson((prevPerson) => {
			// here i take old object with info, and just update name
			return { ...prevPerson, name: 'Tihomir' };
		});
	}

	return (
		<div className='w-full flex flex-col items-center justify-center gap-10'>
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

			<h1 className='text-center text-2xl text-red-400 mb-5'>
				useState Hook with 'Object'
			</h1>
			{/* secound state with {object} */}
			<div className='w-[400px] h-[400px] bg-slate-600 rounded-[30px] flex items-center justify-center flex-col gap-5'>
				<h2 className='text-2xl text-white'>Name: {person.name}</h2>
				<h4 className='text-xl text-orange-300'>Age: {person.age}</h4>
				<button
					onClick={changeName}
					className='text-white px-5 py-2 rounded-xl bg-orange-300'>
					Change just Name
				</button>
			</div>
		</div>
	);
}

export default UseStateHook;
