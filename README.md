## How to setup Prettier in your JavaScript/TypeScript project ?

---

- <b>Step 1</b>: Create a New Project
  First, you need to create a new project. Open your terminal and run:

```bash
mkdir my-project
cd my-project
npm init -y
```

This will create a new project with a package.json file.

---

- <b>Step 2</b>: Install Prettier
  Install Prettier as a development dependency:

```bash
npm install --save-dev prettier
```

Prettier will only be used during the development process by using this command to install it as a development dependency.

Updated dev dependencies:

```js
devDependencies: {
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.2.1",
    "prettier": "^3.3.3"
}
```

---

- <b>Step 3</b>: Create a Prettier Configuration File
  You can configure Prettier with a .prettierrc file or directly in your package.json. For this guide, we'll use the .prettierrc file. Create a file named .prettierrc in the root of your project, and add your preferred Prettier settings:

```js
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 80,
  "tabWidth": 2
}
```

---

- <b>Step 4</b>: Create a Prettier Ignore File
  Create a.prettierignore file in the project root to prevent formatting of particular files or directories. This file functions in the same way as.gitignore. Add the paths you'd like Prettier to ignore:

```bash
node_modules
dist
build
```

---

- <b>Step 5</b>: Format Your Code with Prettier
  You can format your code once Prettier has been installed and configured. Run Prettier with the following command on all files:

```bash
npx prettier --write
```

This will format all files in the project according to the settings in your .prettierrc file.

- <b>Step 6</b>: Set Up Prettier with VSCode
  If you're using Visual Studio Code, integrating Prettier with your editor will streamline the formatting process.

Install the Prettier VSCode Extension: Open Visual Studio Code. Go to the Extensions view by clicking on the Extensions icon or pressing Ctrl+Shift+X. Search for "Prettier - Code formatter" and click Install.

###### Configure Format on Save : To automatically format your code on save:

        a. Open the settings (Ctrl + , or Cmd + , on Mac).
        b. Search for "Editor: Format on Save."
        c. Check the box to enable this option.

---

- <b>Step 7</b>: Combine Prettier with ESLint (Optional)
  Creating certainly Prettier and ESLint don't clash is crucial for projects that also use ESLint. Once the required plugins are installed, you can integrate both:

```bash
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

Next, update your ESLint configuration (.eslintrc.json or .eslintrc.js) to include Prettier:

```js
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "semi": true,
        "singleQuote": true
      }
    ]
  }
}
```

This setup will allow ESLint to check for code errors while letting Prettier handle code formatting.

---

- <b>Step 8</b>: Add Prettier Scripts to package.json
  To make it easier to run Prettier on your project, add the following script to your package.json file:

```json
{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

Now, you can format your entire project with:

```bash
npm run format
```

##### Example code

```js
function sayHello(name) {
  console.log("Hello, ' + name + '!");
}

sayHello('World');
```

##### Run Prettier

```bash
npx prettier --write index.js
```

Output: Prettier has changed the double quotes (") to single quotes (') based on the .prettierrc configuration.It has removed the extra whitespace and formatted the code to maintain consistency.

```js
function sayHello(name) {
  console.log('Hello, ' + name + '!');
}

sayHello('World');
```

##### Conclusion

You have successfully installed Prettier in your JavaScript/TypeScript project by following this guide. Now that formatting is taken care of by Prettier, you can concentrate on writing clear, maintainable code. Prettier guarantees that your project adheres to standard code styles whether you're working alone or in a team, enhancing communication and code readability.

[Reference](https://www.geeksforgeeks.org/how-to-set-up-prettier-in-your-javascript-typescript-project/)
