# LifeTask: A Calendar Task Tracker App
A simple API powered by `json-server` task management application. This project is a minimum viable product (MVP) that allows its users to organize their tasks by day with essential CRUD functionality.

## Table of Contents 📖
- [Features](#features)
- [Technologies](#technologies)
- [Key Components](#key-components)
- [Project Structure](#project-structure)
- [Data Format](#data-format)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Deploying](#deploying)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features ⭐
- RESTful API for tasks and days
- Local JSON storage with data
- Simple integration with frontend apps
- Live reloading with development mode

![Preview of LifeTask app features](public/images/lifetask_features.gif)

## Technologies 📱
1. **React** – For building the UI
2. **Node.js** – Runtime environment to support the dev server
3. **Fetch API** – Used to retrieve task and day data from the local server [/days](http://localhost:3000/days) and [/tasks](http://localhost:3000/tasks)
4. **JSON** – Data format used for local storage and server responses
5. **CSS** – For styling the web application and some functionality
6. **`json-server`** – Serves mock RESTful API based on the `db.json` file

## Key Components 🔑
The main components in this project include reusable page views like Main (LifeTask logo), Calendar, and Tasks. Layout wrappers and shared hooks/context are other core components which are used for managing task data. Tasks can be added, marked complete with a checkbox, and deleted.

## Project Structure 🏗
```pgsql
.
├── public/
│   ├── images/
│   │   └── colored-squares.jpg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── pages/
│   │   │   ├── Calendar.js
│   │   │   ├── Main.js
│   │   │   └── Tasks.js
│   │   ├── utils/
│   │   │    ├── dateUtils.js
│   │   │    ├── tasksContext.js
│   │   │    └── useTasks.js
│   │   ├── App.js
│   │   ├── AppRoutes.js
│   │   ├── Layout.js
│   │   └── NavBar.js
│   ├── Calendar.css
│   ├── index.js
│   ├── Main.css
│   ├── NavBar.css
│   ├── Root.js
│   └── Tasks.css
├── db.json
├── package-lock.json
├── package.json
└── README.md
```

## Data Format 📄
### `/days` and `/tasks` response example:
```json
{
  "days": [
    {
      "id": 1,
      "date": "2025-07-11"
    },
    {
      "id": 2,
      "date": "2025-07-12"
    }
  ],
  "tasks": [
    {
      "id": 1,
      "dayId": 1,
      "text": "Donate clothes",
      "completed": false,
      "date": "2025-07-11"
    },
    {
      "id": 2,
      "dayId": 2,
      "text": "Call mom",
      "completed": false,
      "date": "2025-07-12"
    },
    {
      "id": 1752718234583,
      "text": "Do laundry",
      "date": "2025-07-16",
      "completed": false
    }
  ]
}
```

## Getting Started 👟
1. **Fork** and **clone** this repo
```sh
git clone https://github.com/P-RF/phase-2-project
cd phase-2-project
```
2. Install the dependencies by running: `npm install`
3. Run the server locally: `npm run dev`
4. Visit `http://localhost:3000` to verify it is running

View project repo at: 
https://github.com/P-RF/phase-2-project

## API Endpoints 🔌
Start the development server The JSON server before accessing these routes.
### Available Routes
#### Resource & URL
- Days: http://localhost:3000/days
- Tasks: http://localhost:3000/tasks
#### Home
- Home: http://localhost:3000

## Deploying 🛳
You can deploy your JSON server for free using [Render](https://dashboard.render.com)

### Steps
1. Sign up for a [Render](https://dashboard.render.com) account using your GitHub account.
2. Click **New Web Service** and connect your GitHub repo.
3. Fill out the setup form:
    - Name: *choose any name*
    - Environment mode: *Node*
4. Click **Create Web Service**
5. Wait for the build to complete
6. Access your server at the given Render URL

### Updating Your Deployed Server
1. Make your changes locally
2. **Push** them to **GitHub**
```sh
git add .
git commit -m "Updated data"
git push
```
3. Go to **Render** dashboard > your service > Manual Deploy > Deploy latest commit

## Troubleshooting 🧰
- Ensure `json-server` is installed globally if `npm run dev` fails.
```sh 
npm install -g json-server
```
- If port 3000 is in use, change the port:
```sh
json-server --watch db.json --port 3001
```
- Check that `db.json` exists and is valid JSON.
- Use the browser's dev tools to debug HTTP requests.

## Contributing 🤝
Thank you for your interest in contributing! Below are the steps on how to do so:
1. **Fork** the repository on GitHub
2. **Clone** the repository to your local computer:
```sh
git clone https://github.com/P-RF/phase-2-project
```
3. **Install dependencies** (if not already done so):
```sh
npm install
```
4. **Start the server**:
```sh
npm run dev
```
5. **Make your desired changes**
6. **Test your changes locally**
7. **Add** your changes:
```sh
git add . 
```
8. **Commit** your changes:
```sh 
git commit -m "description of your changes"
```
9. **Push** your changes to your forked repo: 
```sh 
git push
```
10. **Open a pull request (PR)**
    * Go to your forked repository on GitHub
    * Click **"New Pull Request"**
    * Add a title and an explanation of your changes
    * Submit the PR and follow the review process

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/#)

Happy coding!