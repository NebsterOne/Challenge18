# Social Network API

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)

## Table of Contents

- [The Task](#the-task)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock Up](#mock-up)
- [Installation](#installation)
- [Testing](#testing)
- [Walkthrough Video](#walkthrough-video)
- [Contributors](#contributors)
- [Questions](#questions)
- [License](#license)

## The Task

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the last part of this course, you’ll use several of the technologies that social networking platforms use in their full-stack applications. Because the foundation of these applications is data, it’s important that you understand how to build and structure the API first.

The task requirements is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Express.js will be used for routing, a MongoDB database, and the Mongoose ODM. In addition to using the [Express.js](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages, a JavaScript date library (free choice) or the native JavaScript `Date` object to format timestamps, may be used optionally.

Own data is created using Insomnia, after the API is created, as no seed data is provided.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Mock Up

The following animations show examples of the application's API routes being tested in Insomnia.

The following animation shows GET routes to return all users and all thoughts being tested in Insomnia:

![Demo of GET routes to return all users and all thoughts being tested in Insomnia.](./Assets/18-nosql-homework-demo-01.gif)

The following animation shows GET routes to return a single user and a single thought being tested in Insomnia:

![Demo that shows GET routes to return a single user and a single thought being tested in Insomnia.](./Assets/18-nosql-homework-demo-02.gif)

The following animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia:

![Demo that shows the POST, PUT, and DELETE routes for users being tested in Insomnia.](./Assets/18-nosql-homework-demo-03.gif)

The following animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:

![Demo that shows the POST and DELETE routes for a user’s friend list being tested in Insomnia.](./Assets/18-nosql-homework-demo-04.gif)

In addition to this, the walkthrough video is showing the POST, PUT, and DELETE routes for thoughts being tested in Insomnia.
Also, the walkthrough video is showing the POST and DELETE routes for reactions to thoughts being tested in Insomnia.

## Installation

> To setup the application in local, run "npm i" to install the below packages.

    * express
    * mongoose

## Walkthrough Video

```md
[Video 1 - VS Code](https://drive.google.com/file/d/1WzdkmpYW1-Ai0_XBTmpJejWS8-uW4vQU/view)

[Video 2 - Users](https://drive.google.com/file/d/1B_6y1tlStH5_S1RBN2zUI5_2Jamp9xgi/view)

[Video 3 - Thoughts](https://drive.google.com/file/d/1DbD9C56Rhfq13Z_gmjvi0N-KA64dBeX2/view)

[Video 4 - Friends](https://drive.google.com/file/d/13GTd5ysF1WFEI8mHwWGzEgfWUu99tEHJ/view)

[Video 5 - Reactions](https://drive.google.com/file/d/1tckf5RD0XiPp5hPB_a6IM64aTt94OSqw/view)
```

## Licence

N/A

## Signature

GitHub: [NebsterOne](https://github.com/NebsterOne)
