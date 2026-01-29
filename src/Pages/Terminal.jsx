import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react'
import computeResult from '../Logic/computeResult';

export default function Terminal() {

	const [history, setHistory] = useState([]);

	const inputRef = new useRef(null)
	const cursorRef = new useRef(null)
	useEffect(() => {
		document.addEventListener('keydown', (e) => {
			// cursorRef.current.classList = 'bg-zinc-200 w-4 h-8 cursor'
			if (e.key == 'Enter') {
				handleCommandInput(inputRef.current.innerHTML);
				return;
			}
			if (e.key == 'Backspace') {
				if (e.ctrlKey) {
					let inputText = inputRef.current.innerHTML.toString().split(' ').slice(0, -1).join().replaceAll(',', ' ');
					inputRef.current.innerHTML = inputText;
					return;
				}
				let inputText = inputRef.current.innerHTML.toString().slice(0, -1);
				inputRef.current.innerHTML = inputText;
			}
			if (e.ctrlKey || e.altKey || e.key.length > 1) {
				return;
			}
			inputRef.current.innerHTML = inputRef.current.innerHTML + e.key;
		})
		// console.log(cursorRef.current)
		gsap.fromTo(cursorRef.current, {
			opacity: 0,
			yoyo: true,
		}, {
			opacity: 1,
			yoyo: true,
			repeat: Infinity
		})
	}, [])

	// setInterval(()=>{
	// 	cursorRef.current.classList = 'bg-zinc-900 w-4 h-8 cursor' 
	// }, 1000);
	// setTimeout(()=>{
	// 	setInterval(()=>{
	// 		cursorRef.current.classList = 'bg-zinc-200 w-4 h-8 cursor' 
	// 	}, 1000)
	// }, 400)

	const handleCommandInput = (command) => {
		console.log('input command: ', command);
		// let result = ''
		// console.log(history)
		// setHistory([
		// 	...history,
		// 	{ 'command': command, 'result': result }
		// ]) // failed, saves only 1 last input

		let result = computeResult(command, setHistory);
		if(result != 'clear'){
			setHistory(prev => [
				...prev,
				{ command, result }
			]);
		}
		
		inputRef.current.innerHTML = ''
	}

	return (
		<div id='terminalWindow' className='text-2xl'>
			<div className='mb-10 flex flex-col'>
				<span className='text-3xl tracking-tight'>khushpatel - cli portfolio</span>

				<span>
					To print available commands, type 'help' and press Enter
				</span>
			</div>

			{history.map((item, index) => (
				<div key={index} className='historyItems'>
					<div className='flex items-center'>
						user@cli-portfolio ~ $&nbsp;
						<div className='historyInput'>
							{item.command}
						</div>
					</div>
					<div>
						{item.result}
					</div>
				</div>
			))}

			<div id='current' className='relative  flex items-center'>
				user@cli-portfolio ~ $&nbsp;
				<div id='termInput' style={{whiteSpace: 'pre-wrap'}} ref={inputRef}>

				</div>
				<span ref={cursorRef} className='bg-zinc-200 w-4 h-8 cursor'></span>
			</div>
		</div>
	)
}