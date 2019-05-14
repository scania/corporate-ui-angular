# Corporate UI in Angular application

To run Corporate UI in your Angular application, there are few steps you need to follow:
1. From the command line, install `corporate-ui-dev` package from NPM by doing `npm i corporate-ui-dev` in your project folder
2. Include `CUSTOM_ELEMENTS_SCHEMA` in the modules
3. In the component class code (for example `app.component.ts`), import `defineCustomElements` from corporate-ui-dev package, and call `defineCustomElements(['component_name'])` to load components.


## Including Custom Elements Schema

Include `CUSTOM_ELEMENTS_SCHEMA` in the module that will use the Corporate UI components. This will tell Angular to allow web components and their attributes. Here is an example how to include `CUSTOM_ELEMENTS_SCHEMA` in `app.module.ts`

```js
import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


## Call defineCustomElements

To load the components, call `defineCustomElements` from the component class code. Here is an example to load the components from `app.component.ts`. The code below will load `c-theme, c-footer, and c-content`. For all available components, check [this link](https://static.scania.com/build/global/4.0.0-alpha.1/www/index.html). To import all components, pass an 'all' string instead (`defineCustomElements('all')`).

```js
import { Component, Injectable } from '@angular/core';
import { defineCustomElements } from 'corporate-ui-dev/dist/define';

defineCustomElements(['c-theme','c-footer', 'c-content']);
// to import all components pass an 'all' value
// defineCustomElements('all');

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: '#app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-cui';
}

```

To be able to have Scania sticky footer, set the root selector to the html body. So, in the `index.html`, add id to the `body`, for example:
```
<body id="app-root"></body>
```


## Styling

To use Scania styling on a project application, add Scania theme using the `c-theme` component. Add the code below in the angular root component template (for example in the `app.component.html`):

`<c-theme name="Scania" global="true"></c-theme>`

If the `global` attribute set to true, it will add bootstrap 4 styling classes & javascript.


## Live example

See the running example on [this link](https://helloimela.github.io/angular-cui/).


## How to run this project

1. Clone the project
2. Run `npm i` to install package dependencies
3. Run `npm start`. 

   The app will run in the development mode.<br>
   Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

4. `npm run build`

   Builds the app for production to the `build` folder.<br>
   Your app is ready to be deployed!


