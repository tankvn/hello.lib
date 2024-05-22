# hello.lib
Example creating a modern TypeScript/JavaScript library

## JavaScript

## TypeScript

### 1) TypeScript Tooling in 5 minutes

Tutorial can be found at  
https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html


Installing TypeScript
```bat
npm install -g typescript
```

TypeScript compiler:
```bat
tsc greeter.ts
```

### 2) Example Typescript 5.x Library

Simple starter library updated in 2023.

Tutorial can be found at
[https://www.tsmean.com/articles/how-to-write-a-typescript-library/](https://www.tsmean.com/articles/how-to-write-a-typescript-library/).

Repository  
https://github.com/bersling/typescript-library-starter

Homepage  
https://www.npmjs.com/package/hwrld

The *module* compiler option
- `commonjs`: run seamlessly with most current node.js applications
- `es2015`: building a library for the browser

You can write a test like this:  
https://www.tsmean.com/articles/how-to-write-a-typescript-library/unit-testing/

How to set up a local consumer without publishing to npm  
https://www.tsmean.com/articles/how-to-write-a-typescript-library/local-consumer/

How to make your library available as a system command  
https://www.tsmean.com/articles/how-to-write-a-typescript-library/global-installation/

#### Publish to npm

```bat
tsc
npm publish
```

Consume your library anywhere you want by running:
```bat
npm install --save hwrld
```

 For subsequent releases, use the semvar principle. When you make a patch / bugfix to your library, you can run `npm version patch`, for new features `run npm version minor` and on breaking changes of your api run `npm version major``.

## Apps

### Node.js Apps with Grunt

 Example of grunt with a node.js app.

Tutorial can be found at
[https://devcenter.heroku.com/articles/node-with-grunt](https://devcenter.heroku.com/articles/node-with-grunt).

Repository  
https://github.com/heroku-examples/node-grunt

