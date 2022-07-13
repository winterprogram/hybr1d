# Backend

### Overview of Stack

- Node.js
- TypeScript

---

### Installation

Pre-requisites:

- [Node.js](https://nodejs.org/) v16+ to run

Install the dependencies and devDependencies

```sh
npm i
```

---

### Development

Want to contribute? Great!

Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
yarn start
```

or

```sh
npm start
```

Nodemon will start and will watch for any changes that are being made and auto restart the server

 ---

### Setting up Enviorment variables

- Create .env files on root folder and add the following

```json
MONGO_URL=
NODE_ENV=prod
SALT_ROUND=
JWT_KEY=
```

---

### Test Setup

To verify everything is set properly on your localhost hit an api and check

```sh
localhost:3000/api/start  (GET)
```

If all the dependencies are set properly then response will be:-

```json
{
  "message": "hello word"
}
```

---
