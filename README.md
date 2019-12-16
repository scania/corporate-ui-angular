# Corporate UI in Angular application

## Live example

See the running example on [this link](https://scania.github.io/corporate-ui-angular/).

## Getting started

1. Clone the project
2. Run `npm i` to install package dependencies
3. Run `npm start`. 

   The app will run in the development mode.<br>
   Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

4. `npm run build`

   Builds the app for production to the `build` folder.<br>
   Your app is ready to be deployed!


## Project setup

1. Install `corporate-ui` and `scania-theme` package from NPM in your project folder

   ```
   npm i corporate-ui
   npm i scania-theme
   ```
2. Include `CUSTOM_ELEMENTS_SCHEMA` in the modules
3. Import `defineCustomElements` and `add-theme` from corporate-ui package
4. Import `theme` from scania-theme package and use `c-theme` component in the template

   ```<c-theme name="scania" global="true"></c-theme>```
   
   If the `global` attribute set to true, it will add bootstrap 4 styling classes & javascript.

### Prerequisites

If you are using Angular 8+, you need to add `webcomponents` polyfill. Install the dependency:

`npm i @webcomponents/webcomponentsjs --save-dev`

Import the polyfill inside `src/polyfill.ts`

`import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'`


## Including Custom Elements Schema

Include `CUSTOM_ELEMENTS_SCHEMA` in the module that will use the Corporate UI components. This will tell Angular to allow web components and their attributes. Here is an example how to include `CUSTOM_ELEMENTS_SCHEMA` in `app.module.ts`

```js
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

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


## Use Corporate UI and Scania theme

For all available components, check [this link](https://scania.github.io/corporate-ui-site/).

```js
import { Component, Injectable } from '@angular/core';

import { defineCustomElements, addTheme } from 'corporate-ui';
import { theme as scania } from 'scania-theme'; 

defineCustomElements();
addTheme(scania);

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: '#app-root',
  template: `
  <c-theme name="scania" global="true"></c-theme>
  <c-header
    site-name="Corporate UI"
    items='[{ "text": "Home", "href": "/" }]'>
  </c-header>

  <c-footer>
    <a href="/cookies" slot="items">Cookies</a>
    <a href="/contact-us" slot="items">Contact us</a>
  </c-footer>
  `
})
export class AppComponent {
  title = 'angular-cui';
}

```

To be able to have Scania sticky footer, set the root selector to the html body. So, in the `index.html`, add id to the `body`, for example:
```html
<body id="app-root"></body>
```
