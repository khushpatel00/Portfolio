class Controller {
    static locateObject = {
        '/': {
            'home': {
                'user': {
                    'Documents': {
                        'aboutme.txt': '',
                        'projects.txt': '',
                        'contact.txt': '',
                    },
                    'Downloads': {},
                    'EmptyFile.txt': '',
                },
                'admin': {
    
                }
            },
            'var': {},
            'media': {},
            'mnt': {},
            'root': {},
        }
    }
    static changeDirectory(command) {
        if (command[1]) console.log('got ', command);
        else return `cd: expected 1 arguments; got ${command.length - 1}`
    }

    static pwd(command) {
        if (command[1]) return `pwd: expected 0 arguments; got ${command.length - 1}`
        return currentDirectory;
    }

    static readFile(command) {
        if (command.length > 1 || command.length < 0) return `cat: expected 1 arguements; got ${command.length - 1}`
    }
}
export default Controller;