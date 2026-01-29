let currentDirectory = '/home/user'
let auth = 'user'
export default function computeResult(command, setHistory){
	command = command.split(' ');
	// console.log('getting results for ', command);
	switch(command[0]){ // check for the root command
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
	}



	function changeDirectory(){
		if(command[1]) console.log('got ', command);
		else return `cd: expected 1 arguments; got ${command.length - 1}`
	}
	function pwd(){
		if(command[1]) return `pwd: expected 0 arguments; got ${command.length - 1}`
		return currentDirectory;
	}

}