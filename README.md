# ModalFramework

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

The Modal Framework is developed using angular 6 and bootstrap 4. If used without bootstrap, please add appropriate styles for modal to work properly.

The main purpose of this application is to build the centralized modal framework which can be used to optimize the usage of modals in your application. 

We can avoid pre-loading of the component into `DOM` by using its selector which indirectly improves `DOM` performance. It can also help to maintain the state of your modal irrespective of any third party plugin.

One can directly inject the provided `ModalService` in respective component and use it by passing disired component to it. Before passing the component to service we need to add it in `entryComponents` section of our module.

## To use the modal framework;

Import the `ModalService` in your respective component. The `ModalService` has two methods.

1. The first method `openConfirmModal()` is used to open the `ConfirmationModalComponent` in modal. It has configurable title, body and actions. after calling this method it will return the instance of passed component to add/update the properties, messages or other data of the component.
2. We can then subscribe to the actions of the `ConfirmationModalComponent` which can be used perform the required action.

The second method `customModal()` which accepts generic type along with othe modal configuration options.

1. This method can be used to directly pass the component and to get the data after performing any action.

2. We can pass any component to this method and subscribe to the result to perform further actions. 

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
