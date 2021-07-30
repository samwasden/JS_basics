/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "Git is a version control system for maintaining and accessing different version of files on your machine."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "GitHub is a remote repository for storing your own files and git versions in the cloud as well as accessing and sharing files with others."

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
class Command {
    constructor(description, code){
        this.description = description;
        this.code = code;
    }
}
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
let init = new Command("This command initializes a local git repo on your machine for you project directory", "git init")

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = new Command("This command looks to an existing repo and and creates a clone of it in a new location", "git clone (repo url)")

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = new Command("Status returns a description of what stage the files in the directory are currently at in the commit process", "git status")

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = new Command("This command adds specified files to the stage and are now ready to be commited", "git add (filenames)")

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = new Command("Commit takes any files that have been added to this point and commits them to the repo with a user message", "git commit -m (user message)")

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = new Command("This command pushes files from the local repository to an existing and linked remote repository (ie: github)", "git push")

