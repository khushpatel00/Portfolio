class Controller {
    static currentDirectory = '/home/user/Documents'
    static auth = 'user'

    static help = `
This Terminal is the actuall Portfolio of khushpatel00,
for a better viewing experience, you can also visit my UI-Portfolio with command <span class='p-1 px-2 rounded-lg bg-zinc-800'>portfolio</span>, and then click Home

Supported Commands: cd, ls, pwd, clear, portfolio, help

`
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
    static locateFile(path) {
        // console.log(`finding for ${path}`)
        let currentPath = this.pwd([]);
        console.log(`jumping ${currentPath} to ${path}`);

        // distributing path
        path = path.split('/')
        if(path[0] == '' /* '/' - root directory */) currentPath = '/'
        else if(path[0] == '.' /* './' - current directory */) currentPath = currentPath
        else if(path[0] == '..' /* '../' - prev directory */) currentPath = currentPath.split('/').slice(0, -1).join('/');
        else /* direct current directory */ {
            // for testing only
            // this doesnt check if the path is there or not, will be fixed
            currentPath = `${currentPath}/${path}`;
        }
        this.currentDirectory = currentPath
        console.log(this.currentDirectory);


        console.log(path)


        return null;
    }
    static changeDirectory(command) {
        if (command.length > 2 || command.length <= 1) return `cd: expected 1 arguements; got ${command.length - 1}`
        let result = this.locateFile(command[1])
    }

    static pwd(command) {
        if (command[1]) return `pwd: expected 0 arguments; got ${command.length - 1}`
        return this.currentDirectory;
    }

    static readFile(command) {
        if (command.length > 1 || command.length < 0) return `cat: expected 1 arguements; got ${command.length - 1}`
    }
}
export default Controller;