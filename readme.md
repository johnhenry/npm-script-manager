#Scrimp

Scrimp is a portable SCRIpt teMPlating tool that integrates with your existing npm project. It allows you to create scripts based on templates installed within making it easy for anyone to work with and extend your code while minimizing the need to install global tools.

##Installation

There are two methods of installing scrimp. Both result in having installed a local npm script, "npm run scrimp", that will run without further global dependencies.

###Global to Local

Install scrimp globally.

```bash
npm install --g scrimp
```

After installing scrimp globally, the 'initialize-scrimp' command will be available. Simply run it in your project's directory, and it will install scrimp locally as well as add the local script to package.json.

```bash
initialize-scrimp
```

This will automatically install scrimp locally and add the appropriate script to the project's package.json file.

###Direct

Install scrimp locally within your project.

```bash
npm install --save scrimp
```

Add a script referencing scrimp locally to the "scripts" section of you're project's package.json file.

```json

...
  "scripts":{
      "scrimp":"./node_modules/scrimp/bin/scrimp"
  }
...

```

Initialize scrimp manually.

```bash
npm run scrimp init
```

##Usage
Once installed, invoke scrimp as an npm script.

```bash
npm run scrimp <command> -- [options]
```

###Commands
Once installed, invoke scrimp as an npm script.


###init

```bash
npm run scrimp init
```

###add-repo
Add a repository

```bash
npm run scrimp add-repo <repo name> <github url>
```

####Example
```bash
npm run scrimp add-repo main https://github.com/johnhenry/scrimp
```

Note: the main repo is added by default.

###list
List repositories and

```bash
npm run scrimp list [repository name]
```

####Example
```bash
npm run scrimp list
```

or

```bash
npm run scrimp list main
```

Note: Installed templates are marked with a " * ";

###install
Install a template from an added repository

```bash
npm run scrimp install <template name>
```

####Example
```bash
npm run scrimp install main/js-edge
```

or

```bash
npm run scrimp install js-edge
```

Note: If you omit the leading repository name, it will default to "main";


###template
Create an npm script from an installed template.

```bash
npm run scrimp template <new script name> <template name> -- [options]
```

####Example

```bash
npm run scrimp template js <template name> -- [options]
```

###add-script
Create an npm script manually.

```bash
npm run scrimp add-script <new script name> <new script content>
```

####Example
```bash
npm run scrimp add-script css 'cat ./style/index.css ./style/responsive.css > ./dist/style.css'
```

###combine-scripts
Combine previously created scripts.

```bash
npm run scrimp combine-scripts <new script name> [script names...]
```

####Example

```bash
npm run scrimp combine-scripts build js css
```

###remove-script
Remove a previously created script.

```bash
npm run scrimp remove-script <new script name> <script content>
```

####Example

```bash
npm run scrimp remove-script build
```

##Extending

###Repository
Creating a repository is easy. Simply create a github repository with a package.json file in it. Ensure that the file has a "scrimp" property who's value is a dictionary. This dictionary maps template names to the github urls.

```json
{
  ...
  "scrimp":{
    "<template name>":"<github url>",
    "<template name>":"<github url>"
  }
  ...
}
```

I'm working on better versioning in the future.

###Templates
Creating a template is easy. Simply create a github repository with an index.js file and a package.json file in it.

####index.js

The index.js file is a normal node module that exports a function.
The function must return a either string or a Promise fulfilled with a string.
This string  that will be the body of the script

#####Example
```js
module.exports = ()=>{
  return String(require('hat')());
}
```

####package.json
Be sure to include any dependencies that index.js depends upon as [devDependencies](https://docs.npmjs.com/files/package.json#devdependencies).

#####Example
```json
{
  ...
  "devDependencies":{
    "hat":"0.0.3",
    "<template name>":"<github url>"
  }
  ...
}
```

I should find a way to versions these things better.
