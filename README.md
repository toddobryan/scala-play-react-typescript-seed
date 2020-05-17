[![MIT License][license-badge]][LICENSE]

# Scala Play React TypeScript Seed

A fork from [yohangz/scala-play-react-seed](https://github.com/yohangz/scala-play-react-seed) that 
includes TypeScript and modernizes some things--for example, uses hooks, async/await instead of 
callbacks, etc.

> Use play framework to develop the web application backend/services and frontend using React
> Create App, all in a totally integrated workflow and single unified console. This approach will 
> deliver perfect development experience without CORS hassle. 
 
Read more @ http://bit.ly/2A1AzEq and see the repo this is forked from at

[![Scala Play React Seed](https://github.com/yohangz/scala-play-react-seed/blob/master/react.png)](
http://bit.ly/2A1AzEq)

for more documentation.

## Version Summary

* [Play Framework: 2.8.0](https://www.playframework.com/documentation/2.8.x/Home)
* [React: 16.13.1](https://reactjs.org/)
* [React-Router-Dom: 5.2.0](https://reacttraining.com/react-router/web/guides/quick-start)
* [React-Scripts: 3.4.1](https://github.com/facebook/create-react-app)
* [TypeScript: 3.9.2](https://www.typescriptlang.org/)

The easiest way to get this to run is to use 2 terminal. In the first, `cd` to the project
directory and run
```asp
$ ./sbt run
```
This will open a browser window with an error. Hang on...

In a second terminal,
```asp
$ cd ui
$ npm start
```
Now you should see a running app. Notice that the text after "Welcome to " in the title
is actually loaded by making a call to the Play app and that clicking on the logos