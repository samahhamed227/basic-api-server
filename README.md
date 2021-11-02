# basic-api-server

# server-deployment-practice


* [GitHub Repo Link](https://github.com/samahhamed227/basic-api-server)

* [Heroku Link](https://samah-basic-api-server.herokuapp.com/) :https://samah-api-express-server.herokuapp.com/

* [Test Report]()
* [Front end]()
![](umll2.png)

## Notes

 # Express REST API

Express servers can quickly get big and out of control if you build them in one monolithic server file. There are many strategies for breaking the route handling logic into modules that "make sense" ... we'll be introducing the you to one such pattern today -- separate routers that contain all of the routing logic and handlers using `Express.router()`. In 301, we kept the route definitions in the server and imported the handler functions from other modules. There is more than one way to do it, and your applications can be seen through many lenses.


### CRUD Operations with REST and Express

- CREATE
  - `app.post('/resource')`
- READ
  - `app.get('/resource')`
- UPDATE
  - `app.put('/resource/:id')`
- DESTROY
  - `app.get('/resource/:id')`

### Route Modules

- Normal node modules
- Require express just like your server
- Instantiate `express.router` instead of `express()`
- Export the route definitions
- The main server/app should require your route an then `use()` them
  - The server can prefix imported routes

  ### Sequelize

In order to communicate with our SQL database we will utilize the `sequelize` library and the `sequelize-cli` to communicate with our persistent data.  Use the following commands to perform database intialization and CRUD behaviors.

#### Initialize Database and Tables

Sequelize has a partner tool: `sequelize-cli` that can be used to configure our database: `npm install -g sequelize-cli`

1. Use `sequelize-cli` to intialize our project with configuration files:

```bash
$ sequelize init:config


Sequelize CLI [Node: 14.2.0, CLI: 6.2.0, ORM: 6.6.2]

Created "config/config.json"
```

1. Once our configuration files are created, we can add our database environment details:

> NOTE: make sure you modify the username, password, and database fields and well making sure `postgres` is specified in config/config.json
