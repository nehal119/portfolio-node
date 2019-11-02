###Install node-sass compiler

npm install --save-dev node-sass

###Create a shortcut command in package.json

//package.json
"scripts": {
"sass:compile": "node-sass --include-path sass INPUT_FILE.scss OUTPUT_FILE.css",
}


###The above script command can be run with:
npm run sass:compile


#####The compile command will create a css file (‘output.css’).