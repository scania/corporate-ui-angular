# CuiFour

To run Corporate UI in your Angular application, there are 2 steps you need to follow:
1. Include `CUSTOM_ELEMENTS_SCHEMA` in the modules
2. Call `defineCustomElement(['component_name'])` from the component class code (for example `app.component.ts`)
3. Check on this link to see all available components

## Styling
To use Scania styling on your application, you need to add Scania theme using the `c-theme` component. How to use it:

`<c-theme name="Scania" global="true"></c-theme>`

If you set `global` attribute to true, it will add bootstrap 4 styling classes & javascript.

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
