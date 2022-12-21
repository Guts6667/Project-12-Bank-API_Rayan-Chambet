# Project #13 - Argent Bank API

### Context

This is a school project made to validate my bachelor.
The backend has been forked from:

https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API.git

### Goal

The goal of this project was to create the front-end using react and redux.

## Getting Started

### Install dependencies

Run: `npm install` or `yarn install`

### Install Sass

Run: `yarn add sass` or `npm install sass`

### Install Redux Toolkit

Run: `npm install @reduxjs/toolkit` or `yarn add @reduxjs/toolkit`

## Start the backend

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions

```bash

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

### Having trouble launching the backend on MacOS?

#### Mongo

Follow this link for complete instructions https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/

#### Homebrew

If you don't have home brew package manager installed (global) then: https://brew.sh/index_fr

To download the official Homebrew formula for MongoDB and the Database Tools, by running the following command in your macOS Terminal:
`brew tap mongodb/brew`

To update Homebrew and all existing formulae:
`brew install mongodb-community@6.0`

To install MongoDB, run the following command in your macOS Terminal application:
`brew install mongodb-community@6.0`

You can verify the version by running: `mongod --version`

Run MongoDB: `brew services start mongodb-community@6.`

To stop it, run: `brew services stop mongodb-community@6.0`

Once MongoDB is running, you can open a new terminal and run:
`npm run populate-db`

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

```

```

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Design Assets

Static HTML and CSS has been created for most of the site and is located in: `/designs`.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in `/designs/wireframes/edit-user-name.png`.

And for the API model that you will be proposing for transactitons, the wireframe can be found in `/designs/wireframes/transactions.png`.
