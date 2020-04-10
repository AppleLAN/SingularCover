# SingularCover

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Documentation Generated with compodoc

To run the documentation in a browser first install compodoc

`npm install -g @compodoc/compodoc`

and 

`npm run compodoc`

## Used Technologies

-Angular 9

-Rxjs

-FxLayout

-Angular Cli

-Webpack

-Angular Materials

-Karma 

-Jasmine

-Typescript

-Firebase for hosting and data management

## Hosted Application
The hosted application can be found at https://singularcover-5779f.web.app/insurance-selector

## Things to improve 
I would have loved to use a backend framework to generate an Api and implement:

HttpInterceptor for:
-Token management
-Login and Register 
-Better Loading Spinner implementation, that instead of controling when to show it or hide it at a service i could have a counter of the number of http requests and then when all of them were satisfied hide the spinner.

Server pagination istead of Angular Materials one:
In this case even if Angular Materials has a front end pagination with lazy loading of its elements, its always better to think that you are managing a large number of elements. Server side pagination and filtering using an index and offset is always better in a performance and security aspect.

Better control of notification messages:
To deliver specific error and success messages to the user instead of generic ones.

## Things to consider when watching the code
The main idea behind this application is to represent all the good practices that are available when working with an Angular application.

You are going to find that every single function is commented, functional, declarative, with no side effects and improved with ES6 methods.

All child components are created with Atomic Design and performance in mind, implementing onPush change detection strategy and the async pipe for reactive programming so you are not going to find any subscriptions, making everything secure against memory leaks.

These implementations can be seen when working with the favorites modal open, as soon as you toggle a favorite element you will see the table behind it (if you are at the insurance view) update itself with the new information, and because we are using onPush with the async pipe all components only trigger a change when is really needed.

The Angular Materials theme is custom made and implemented across the application.
