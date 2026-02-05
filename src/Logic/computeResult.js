// import switchPage from '../Logic/PageSwitch'
// import { handleClick } from "../Components/Menu";
import Controller from './fileStructure.controller'


// if typeof value = object, value represents directory
// elseif value = string, value represents file 



export default function computeResult(command, setHistory, navigate) {

	command = command.split(' ');
	// console.log('getting results for ', command);
	switch (command[0]) { // check for the root command
		case 'help':
			return Controller.help;
			break;
		case 'pwd':
			return Controller.pwd(command);
			break;
		case 'cd':
			return Controller.changeDirectory(command);
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
		case 'cat':
			return Controller.readFile(command);
			break;
	}




}