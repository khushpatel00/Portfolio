class Controller {
    static currentDirectory = '/home/user'
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
                        'Projects': {
                            'projects.txt': '',
                        },
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
    static CurrentObject = { // default directory
        ...this.locateObject['/']['home']['user']
    }
    static locateFile(path) {
        // console.log(`finding for ${path}`)
        let currentPath = this.pwd([]);
        console.log(`jumping ${currentPath} to ${path}`);

        // distributing path
        path = path.split('/')
        console.log(path);
        let result = ''
        path.forEach((com, index) => {
            if (com == '' /* '/' - root directory */) {
                this.CurrentObject = { ...this.locateObject['/'] }
                currentPath = '/'
                this.currentDirectory = '/'
                console.log(this.CurrentObject)
            }
            else if (com == '.' /* './' - current directory */) currentPath = currentPath
            else if (com == '..' /* '../' - prev directory */) {
                currentPath = currentPath.split('/').slice(0, -1).join('/');
                console.log(currentPath)
                this.currentDirectory = currentPath == '' ? '/' : currentPath;
            }
            if (com != '' && com != '.' && com != '..')
                /* direct current directory */ {
                // for testing only
                // this doesnt check if the path is there or not, will be fixed

                if (this.CurrentObject[com] != undefined) {
                    this.CurrentObject = this.CurrentObject[com];
                    this.currentDirectory = `${this.currentDirectory == '/' ? '' : this.currentDirectory}/${com}`;
                    console.log(this.currentDirectory);
                } else result = `cd: the directory "${path.join('/')}" does not exist`
                // console.log(this.locateObject[com]);

                console.log('current Object: ', this.CurrentObject)



            }
            // currentPath = `${currentPath}/${path}`;
            // let currentPathObject = this.currentDirectory.split('/');
            // console.log(currentPathObject);
            // this.currentDirectory = currentPath
            // console.log(this.currentDirectory);
        })

        return result;
    }
    static changeDirectory(command) {
        if (command.length > 2 || command.length <= 1) return `cd: expected 1 arguements; got ${command.length - 1}`
        let result = this.locateFile(command[1])
        return result;
    }

    static pwd(command) {
        if (command[1]) return `pwd: expected 0 arguments; got ${command.length - 1}`
        return this.currentDirectory;
    }

    static readFile(command) {
        if (command.length > 1 || command.length < 0) return `cat: expected 1 arguements; got ${command.length - 1}`
    }
    static ls() {
        let temp = '';
        Object.keys(this.CurrentObject).map((item) => {
            temp += `${item}    `;
        })
        return temp;
    }
}
export default Controller;