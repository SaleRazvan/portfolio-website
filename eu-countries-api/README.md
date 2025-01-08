<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This project is a personal initiative to practice my skills with [NestJS](https://github.com/nestjs/nest), explore new techniques, and build something meaningful. It’s both a learning experience and a showcase of what I learned about backend development

##### Covered technologies/techniques/patterns (list not exhaustive)

1. Project generation and general interaction with Nest CLI
2. Elements of nest architecture - Services/Repositories, Modules, etc.
3. Validating data using pipes
4. Request handling - Controllers, Handlers, Param/Body/Query decorators, DTOs
5. Persisting/interacting with data using TypeORM and SQLite
6. Custom data serialization - Interceptors, Custom Decorators
7. Auth flow and related - Password hashing & salting, cookies (cookie-session library), Guards
8. Database entities associations with typeORM
9. Repository queryBuilders

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev
```

## Deployment

The server is currently deployed on [Render.com](https://render.com/) and available for HTTP requests @ [https://portfolio-website-9jb0.onrender.com](https://portfolio-website-9jb0.onrender.com)

## The following routes are available

### Auth

```
@ GET: /auth/whoami, /auth, /auth/:id
@ POST: /auth/signup, /auth/signin, /auth/signout,
@ PATCH: /auth/:id
@ DELETE: /auth/:id
```

### FunFacts

```
@ GET: /fun-facts/all, /fun-facts/unapproved, /fun-facts/:country
@ POST: /fun-facts
@ PATCH: /fun-facts/:id
```

## Feedback

Feel free to fork this repository, open issues, or submit pull requests if you have suggestions or improvements. I'd love to hear your thoughts!

## License

This project is licensed under the [MIT License](LICENSE).
