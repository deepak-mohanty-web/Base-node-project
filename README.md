## About the file structure

This is a node js project template , which anyone can use as it has been prepared, by keeping some of the most important code principles and project managment recommendations. Feel free to change anything.

`src`-> Inside the src folder all the actual source code regrading the project will reside , This will not include any kind of tests.( You might wanty sepatrate tests folders).

#### Inside the `src` folder:-

- `config`-> In this folder anything and everthing regrading any configurations or setup of libary or module will be done.
  For Example:- Setting up `env` so that we can use environment variables anywhere in a cleaner fashion , this is done in the `server-config.js`.
  One more example can be to set up your logging libery that can help to prepare meaningfull logs, so configuration for this libary should also be done here.

- `routes`->In the routes folder, we register a route and the corresponding middleaware and controllers to it.

- `middleware` -> They are just going to intercept the incoming requests where we can write our validator , authenticator etc.

- `controllers` -> They are kind of the last middleware as post them you call you bussiness layer to excute the bussiness logic. In controllers we just receive the incoming request and the data and then pass it in to then bussiness layer, and once busiess layer return an output , we structure the API response in controllers and send them to output.
- `repositories` -> This folder comtain all logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

- `services`-> contains the business logic and interacts with repoitories for data from  the database.

- `utils`-> contains helper methods, error classes etc.
