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

A NestJS-powered backend API that generates personalized travel suggestions by orchestrating multiple external services to provide comprehensive destination recommendations.

## What it does

The Holiday Finder backend takes user preferences (temperature, budget, departure date, etc.) and intelligently combines data from multiple sources to deliver enriched travel suggestions:

AI-Powered Destination Generation - Leverages a Large Language Model (LLM) via Hugging Face/DeepSeek to generate personalized destination recommendations with detailed descriptions based on user preferences

Visual Content - Fetches high-quality destination images from the Unsplash API to bring each suggestion to life

Flight Cost Estimation - Integrates with flight fare search APIs to provide real-time pricing between the user's location and suggested destinations

Geolocation Services - Automatically detects user location and nearest airport for accurate flight pricing

### Tech Stack

Framework: NestJS (TypeScript)

AI/LLM: Hugging Face / DeepSeek API

Image Service: Unsplash API

Flight Data: Flight Fare Search API

Geolocation Service: Ipinfo.io API

Documentation: Swagger/OpenAPI

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

# production mode
$ yarn run start:prod
```

## Deployment

The server is currently deployed on [Render.com](https://render.com/) and available for HTTP requests @ [https://holiday-finder-v9bo.onrender.com](https://holiday-finder-v9bo.onrender.com)

### The following routes are available:

```
@ POST: /destinations - Generate AI-powered destination suggestions based on user preferences
@ GET: /unsplash - Fetch destination images from Unsplash
@ GET: /flight-fare-search - Get flight pricing for specific routes
@ POST: /travel-suggestions - Main endpoint - Returns comprehensive travel suggestions with destinations, images, and flight costs in a unified response
@ GET: /geolocation - Get user location from request IP
@ GET:   /geolocation/airports - Find nearest airport by city/country
```

## Feedback

Feel free to fork this repository, open issues, or submit pull requests if you have suggestions or improvements. I'd love to hear your thoughts!

## License

This project is licensed under the [MIT License](LICENSE).
