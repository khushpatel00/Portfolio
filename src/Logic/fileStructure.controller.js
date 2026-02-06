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
                        'aboutme.txt': 'about me',
                        'Projects': {
                            'projects.txt': 'projects',
                        },
                        'contact.txt': 'on github',
                    },
                    'Downloads': {},
                    'emptyFile.txt': 'nothn',
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
                    if (typeof this.CurrentObject[com] == 'string') {
                        result = `cd: "${com}" is a file, not a directory`;
                        return;
                    } else {
                        this.CurrentObject = this.CurrentObject[com];
                        this.currentDirectory = `${this.currentDirectory == '/' ? '' : this.currentDirectory}/${com}`;
                    }
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
    static readFile(command) {
        let fileContent = '', tempDirectory = this.currentDirectory, tempObject = { ...this.CurrentObject }, result = '';
        if (command[1].split('/').length <= 1) {
            fileContent = this.CurrentObject[command[1]]
        } else {
            let currentPath = this.pwd([]);
            command[1].split('/').forEach((com) => {
                if (com == '' /* '/' - root directory */) {
                    tempObject = { ...this.locateObject['/'] }
                    tempDirectory = '/'
                    // this.currentDirectory = '/'
                    // console.log(this.CurrentObject)
                }
                else if (com == '.' /* './' - current directory */) tempDirectory = currentPath
                else if (com == '..' /* '../' - prev directory */) {
                    currentPath = currentPath.split('/').slice(0, -1).join('/');
                    console.log(currentPath)
                    tempDirectory = currentPath == '' ? '/' : currentPath;
                }
                if (com != '' && com != '.' && com != '..') {
                    if (tempObject[com] != undefined) {
                        if (typeof tempObject[com] != 'object') {
                            fileContent = `cat: "${com}" is a directory, not a file`;
                        } else {
                            tempObject = tempObject[com];
                            tempDirectory = `${tempDirectory == '/' ? '' : tempDirectory}/${com}`;
                        }
                        console.log(tempDirectory);
                    } else fileContent = `cat: file "${command[0]}" does not exist`
                    console.log('current Object: ', tempObject)
                    fileContent = tempObject[command[1].split('/').pop()]
                    console.log(fileContent, tempObject, command[1], command[1].split('/'));
                }
            })
            
        }
        fileContent == `cat: cant find ${command[1].split('/')}`
        console.log(fileContent);
 
        return fileContent
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

    static cat(command) {
        if (command.length > 2 || command.length < 0) return `cat: expected 1 arguements; got ${command.length - 1}`
        return this.readFile(command)
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