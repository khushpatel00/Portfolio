// import switchPage from '../Logic/PageSwitch'
// import { handleClick } from "../Components/Menu";
let currentDirectory = '/home/user'
let auth = 'user'

let help = `
This Terminal is the actuall Portfolio of khushpatel00,
for a better viewing experience, you can also visit my UI-Portfolio with command <span class='p-1 px-2 rounded-lg bg-zinc-800'>portfolio</span>

Supported Commands: cd, ls, pwd, clear, portfolio, help

`

export default function computeResult(command, setHistory, navigate) {
	
	command = command.split(' ');
	// console.log('getting results for ', command);
	switch (command[0]) { // check for the root command
		case 'help': 
			return help;
			break;
		case 'pwd':
			return pwd();
			break;
		case 'cd':
			return changeDirectory();
			break;
		case 'clear':
			setHistory([]);
			return 'clear';
			break;
		case 'portfolio':
			// Dispatch an event that the Menu component listens for to trigger the menu click
			if (typeof window !== 'undefined' && window.dispatchEvent) {
				window.dispatchEvent(new CustomEvent('cli:portfolio'));
			}
			return 'switching pages';
			break;
	}



	function changeDirectory() {
		if (command[1]) console.log('got ', command);
		else return `cd: expected 1 arguments; got ${command.length - 1}`
	}
	function pwd() {
		if (command[1]) return `pwd: expected 0 arguments; got ${command.length - 1}`
		return currentDirectory;
	}

}