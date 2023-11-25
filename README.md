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

### Created Module and Component for 'products' application

```
npx @angular/cli@16.2.10 generate module home --project products
```

```
npx @angular/cli@16.2.10 generate component home/components --project products
```

### Created Module and Component for 'cart' application

```
npx @angular/cli@16.2.10 generate module cart --project cart
```

```
npx @angular/cli@16.2.10 generate component cart/components --
project cart
```
