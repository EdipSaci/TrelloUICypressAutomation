# VaultN Task UI Automation Project

This project is a QA automation framework built using Mocha framework with Cypress and Javascript. 


## Steps to Create Project
### 1. Install Node.js
> VaultNTaskProject

### 2. Create a folder name as “VaultNCypressProject”`
### 3. Open it with Visual Studio Code
### 4. run following commands in Terminal

> 1. npm init

> 2. npm install cypress --save-dev

> 3. npx cypress open --> to open cypress


### 5. Create a file named as `jsconfig.json` under `VaultNCypressProject` 

> 1. Add followingto see IntelliSense when typing a Cypress command or assertion
     {
     "include": ["./node_modules/cypress", "cypress/**/*.js"]
     }

### 6. Create `pages` under project level to store web elements
> 1. Store web elements and some custom methods


### 7. Under `fixture` folder, 
* Store test datas with .json extension
* Responsible store the test data

#### 8.Under `support` folder, create custom methods

#### 9.Under `node_modules` folder
> 1. Dependency Storage: It stores all the libraries and packages that your project depends on. When you install Cypress, it installs not just Cypress but also any other libraries that Cypress depends on to work.
> 2. Local Execution: The packages installed in node_modules are specific to your project. This ensures that you can execute the project with the correct versions of the dependencies, without affecting or being affected by global packages or other projects.
> 3. Package Versioning: The node_modules directory ensures that your project is running with the exact versions of the packages specified in your package.json file, which helps avoid compatibility issues.

#### 10.In `cypress.config.js` file
 * It is a configuration file.  store information in e2e object

#### 11.Under `screenshots` evidences of failed test scripts

#### 12. Under `package.json` file
* Is used to for more than dependencies -like defining project info, description, author & license, scripts (like pom.xml)

### 13. Under `package-lock-json` file
* Describe a single representation of dependency tree such that teammates, deployments and continuous integration are guarantees to install exactly the same dependencies

> 1. in order to run your scripts headless mode run following command 
* npx cypress run --spec "cypress/e2e/Test1.cy.js"

> 2. in order to run your scripts head mode run following command
 * npx cypress open --spec "cypress/e2e/Test1.cy.js”
