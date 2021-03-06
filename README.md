# CompassSurvey

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Mock backend API with READ routes
The example app runs with a mock backend api by default to enable it to run completely in the browser without a real api, 
the mock api contains routes for Survey, Questions and Options Read operations and it uses mock-db.ts to get data. 
To disable the mock backend you just have to remove mock backend provider from the app.module.ts file

## Run the Compass Survey app Locally
Install Node.js and npm from https://nodejs.org.
Download or clone the Angular project source code from [here](https://github.com/JatinderSingh1981/Compass-Survey/).

Install all required npm packages by running npm install or npm i from the command line in the project root folder (where the package.json is located).
Start the app by running npm start from the command line in the project root folder, this will compile the Angular app and automatically launch it in the browser on the URL http://localhost:4200.
NOTE: You can also start the Compass Survey app with the Angular CLI command ng serve --open. 
To do this first install the Angular CLI globally on your system with the command npm install -g @angular/cli.

## Project Structure
The Angular CLI was used to generate the base project structure with the `ng new <project name>` command 
and with the "enforce stricter type checking" (strict mode) option enabled, the CLI is also used to build and serve the application. 
For more info on the Angular CLI see https://angular.io/cli, and for more info on Angular strict mode see https://angular.io/guide/strict-mode.

Each feature will have it's own folder hierarchy (Survey, Questions, QuestionOptions etc), 
other shared/common code such as shared components, services, models, helpers etc are placed in folders prefixed with an underscore `_` to easily differentiate them from features and group them together at the top of the folder structure.

The `index.ts` files in some folders are barrel files that group the exported modules from that folder together so they can be imported using only the folder path instead of the full module path, and to enable importing multiple modules in a single import 
(e.g. `import { Question, QuestionType, SQOption, Survey } from "appmodels";`).

Path aliases `@app, @appmodels, @appservices, @apphelpers, @shared and @environments` have been configured in `tsconfig.json` that map to different directories. 
This allows imports to be relative to the app and environments folders by prefixing import paths with aliases instead of having to use long relative paths 
(e.g. `import MyComponent from '../../../MyComponent'`).

[Here](https://github.com/JatinderSingh1981/Compass-Survey/blob/master/src/assets/DirectoryStructure.png?raw=true) are the main project files that contain the application logic, 
I left out files that were generated by Angular CLI `ng new` command that I didn't change.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
