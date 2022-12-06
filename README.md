# Backend Coding Challenge

Our main goal for this exercise is to get an idea of how you are to work with and how you approach your engineering work. That insight is more important than your actual working solution at the end of this exercise.

Please record your screen and talk us through the coding exercise as you work through it. Don't hesitate to think out loud—that's the interesting part!

We expect this to take around an hour.

## Brief

You'll be building an endpoint to look up airport information. In its current state, we render a list of all airports (around 6000) on the frontend, but we don't want to keep this data in the frontend or load them all at once.

Please move this data into a database scheme on the backend, and then write an endpoint that allows fetching data from the frontend. Your endpoint should allow user to look up airports by searching for airports by name, IATA, city, or country.

## Assumptions

- Tilla uses [NestJS](https://nestjs.com), [Prisma](https://www.prisma.io) with PostgreSQL and TypeScript. It'd be cool if you use that same tech stack for this exercise.
- The database is currently a JSON file with airport data.
- The IATA code is a unique identifier for an airport.
- While we care more about your thought process than your outcome, we're still interested in how you write code. Don't cut corners there, and write the code as if you'd write a real-world, production-quality product.

## Extra questions

We'd love to hear your thoughts on some of these questions. Please don't spend more than a minute or two on each question.

- What are some edge cases you would take care of before shipping this to production?
- How would you scale this to handle high amounts of traffic?
- What's important for you to work well in a fully remote team?

## Deliverables

- Invite [@pieterbeulque](https://github.com/pieterbeulque) and [@umartayyab](https://github.com/umartayyab) to a GitHub repo with your completed project
- A video of your screen recording (unlisted YouTube video, Loom, … anything works)
- Answers to the questions above can be either in the video or written down in the README of your repo

## Getting Started

The app is designed to work out of the box.

```shell
yarn install
yarn start
```

The app should be available via [http://localhost:3000](http://localhost:3000).

Good luck and talk soon!


## Answers to the questions

- It would be much better implemented if we could add some kind of fuzzy search for the parameters mentioned so that we won't have to match exactly the words. Using something like elasticsearch to handle the text search would help with that quite a bit. In the task I implemented the search criteria for each parameter separately, however we could use 1 keyword to search across all parameters at once. It would help broaden the search but would limit the functionality of the application as we would not have extra filtering with more than one parameter. Other than those 2 points, with the pagination we did in place, the API would be ready for production.

- In order to scale this for high amounts of traffic, we would need to deploy the API on multiple web servers to handle multiple requests at once. Also, it would benefit us to index the search parameters in order to increase the speed of the search queries. We should optimize the queries and make sure they aren't very complicated and don't take much time to process. Setting up a cache would help us in decreasing the latency time of APIs. Finally reducing the number of results per page would improve the speed of the request and as a result improve scalability.

- I think the most important part in working remotely is communication. Sometimes with fully remote teams people take for granted the importance of teamwork and good team communication. With software developers in particular, not all people value the social aspect of the job. However, when you focus on your team as much as you do on your own work, the overall productivity is multiplied quite a bit. That's why I like to help people as much as I could, learn from other developers who might know more than I do in certain aspects and interact as much as possible with everybody in the team in order to build a relationship to improve the overall work environment and productivity. One more thing I found to be very important is the onboarding for new team members. If there is some kind of onboarding process in place it helps a lot to accelarate the start of the contribution to the team and helps the new members hit the floor running as soon as possible.
