a) Remember that dist is the final project, if something has to be shown or taken, this is the stuff not the rest.

### STEPS:

1. check npm version [npm --version]
2. create a package.json file since we are installing anything with npm [npm init -y], this file has name, version, all that stuff. Once we install node sass it should get listed in here(in package.json) as a dependency.
3. to install node sass [npm install node-sass]
4. now to use node-sass, we have to create "npm script". So, change this [ "test": "echo \"Error: no test specified\" && exit 1"] to ["sass": "node-sass -w scss/ -o dist/css/ --recursive"] .... where -w is a watch flag & we have to constantly watch a folder call scss, that we haven't created yet. Then we want to output to "-o dist" & dist is where our project will live.
5. then create scss folder with main.scss file in it.
6. then create dist folder
7. now, to run sass [npm run sass]

b) if you dont want to go through this hassle then download Koala[It is a graphical interface] and it will do all this work that we did in terminal
(prefer terminal)

c) There also another way, just download an extension in vscode by the name "live sass compiler" ... it will compile sass for you

d) Before using this sass project in terminal "npm run sass" and select the perticular folder & parent folder(like WebDev-Absorbing it)

e) Using underscore in the file naming tells the compiler that we don't want this file to get compiles and we dont want variable.css in our css folder
& While importing the file just write "@import 'variables';" on top of the main.scss file ... see that we haven't included the \_ or .scss extension.

f) after creating every new file in scss , re-run sass from the terminal

g) .section {

&-a { //&- represents whatever is the parent selector. Here it is section-a
}
}
ANOTHER EXAMPLE
a {
color: #333;

&:hover {
color: coral;
}
}

h) Difference between a function and a Mixin is that a function actually returns something and we have to use the return keyword. A Mixin is just a set of styles that you want to include.
