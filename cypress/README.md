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

#### 8.Under `support` package, create custom methods

#### 9.Under `screenshots` evidences of failed test scripts

#### 7. in order to run your scripts headless mode run following command 
> 1. npx cypress run --spec "cypress/e2e/Test1.cy.js"

### 8. in order to run your scripts head mode run following command 
> 1. npx cypress open --spec "cypress/e2e/Test1.cy.js”

