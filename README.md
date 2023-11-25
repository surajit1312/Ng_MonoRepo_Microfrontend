# NgMonoRepoMicrofrontend

This is a repository to illustrate Microfrontend application in Angular v16 using Module Federation controlling state managemet using NgRx.

## Created Workspace

```
npx @angular/cli@16.2.10 new Ng_MonoRepo_Microfrontend  --create-application=false
```

## Created Application 'Products'

```
npx @angular/cli@16.2.10 generate application products --routing --style=scss
```

## Created Application 'Cart'

```
npx @angular/cli@16.2.10 generate application cart --routing --style=scss
```

## Added Module Federation (included in Webpack 5). This allows angular to use custom builder '@angular-architects/module-federation' to the projects 'products' and 'cart'.

### Products App - Type mentioned here as 'host' to make 'products' application behave as host and same host configuration would be added to 'webpack.config.js with port set to 4200'

```
npx @angular/cli@16.2.10 add @angular-architects/module-federation@16.0.4 --project products --port 4200 --type host
```

### Cart App - Type mentioned here as 'remote' to make 'cart' application behave as remote and same remote configuration would be added to 'webpack.config.js with port set to 4300'

```
npx @angular/cli@16.2.10 add @angular-architects/module-federation@16.0.4 --project cart --port 4300 --type remote
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
